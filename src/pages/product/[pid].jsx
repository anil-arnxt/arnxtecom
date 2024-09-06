
import { useRouter } from 'next/router'

import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { Box, Boxes, CodeSquare, Heart, MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import axios from 'axios'
import { ImageZoom } from 'react-responsive-image-zoom';
import '@/pages/product/product.css'
import { Ecomcontext, useAppContext } from '@/context/context'
import Rugs from '../components/productdetailscomponent/Rugs'
import Wallpapers from '../components/productdetailscomponent/Wallpapers'



const getsingleproducturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsinglearnxtecomproduct'

const addtocarturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/addtocartarnxtecommerce'



export async function getServerSideProps({ params }) {
  const { pid } = params; 

  const body = {
    Id: pid,
  };

  const response = await axios.post(getsingleproducturl, body);
  const dataitem = response.data[0];

  return {
    props: { dataitem },
  };
}

// export async function getStaticPaths() {


//   return {
//     paths: [],
//     fallback: 'blocking', 
//   };
// }

const Product = ({dataitem}) => {

        const {quantity , setQuantity} =   useAppContext()
        
         const [currentimage, setCurrentImage] = useState(dataitem && dataitem.productmainimage)
        const [currentproductdetails, setCurrentProductDetails] = useState(dataitem['care'])
        const [activeindeximage, setActiveIndexImage] = useState(0)
      

    const [tempquantity, setTempQuantity] = useState(0)
    const [activepriceindex, setActivePriceIndex] = useState(0)

     const handleimageclick = (value, index)=>{
           setActiveIndexImage(index)
          setActiveIndexImage(index)
     }        

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index, value) => {

   
      setActiveIndex(index);
      setCurrentProductDetails(dataitem[value])
    };

    const handleincreaseitem = (id)=>{

      if (quantity.length === 0) {
        setQuantity([
          {
            Id: id,
            quantity: 1,
          },
        ]);
      } else {
        const newarr = quantity.map((item) => {
          if (item.Id === id) {
           
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
    
     
        const itemExists = newarr.some(item => item.Id === id);
    
      
        if (!itemExists) {
          newarr.push({
            Id: id,
            quantity: 1,
          });
        }
    
        setQuantity(newarr);
      }
    }



    const handledecreaseitem = (id)=>{

      const newarr = quantity.map((item) => {
        if (item.Id === id) {
         
          return { ...item,  quantity: item.quantity === 0 ? 0 : item.quantity - 1 };
        }
        return item;
      });

  
      setQuantity(newarr);

    }

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
  
    const items = [
    
      'Care',
       'DesignStory',
      'Details',
      'ShippingDetails'
    ];



    const handleAddToCart = async (id, quantity)=>{
          
             if(sessionStorage.getItem('isLogin')){

                const email = sessionStorage.getItem('email')

              const body = {
                Id: email,
                productid: id,
                quantity: quantity
              }
              

              try{

                const res = await axios.post(addtocarturl, body)
                console.log(res.data)

              }catch(error){
                console.log(error)
              }
                
             }else{
              
             }

    }

    const renderComponent = () => {
      switch (dataitem && dataitem.subcategory) {
        case 'Rugs':
          return <Rugs  dataitem ={dataitem}/>;
          
            case 'Wallpapers':
              return <Wallpapers  dataitem ={dataitem}/>;
  
        
                                 
        default:
          return null;
      }
    };


  console.log(dataitem)
 
  return (
    <div>
        <Navbar/>

        {renderComponent()}
{/* 
        <div className='container mx-auto p-4 md:p-10'>
  <div className='grid md:grid-cols-12 grid-cols-1'>
    <div className='md:col-span-5 flex justify-center h-[500px] md:justify-start'>
      <div className='grid grid-rows-12 w-full md:w-[500px] place-items-center '>
        <div className='row-span-9 w-full h-full  flex justify-center'>
        {
          isClient && 

        
              <ImageZoom
              src={dataitem && dataitem?.images[activeindeximage]}
              defaultZoomFactor={1.5}
              transition={0.5}
              breakpoints={[
                { maxWidth: 768, zoomFactor: 1.2 },
                { maxWidth: 1024, zoomFactor: 1.4 }
              ]}
            
            imgClassName='imageproduct'
              debug={false}
            />
          
        
  
}
       
        </div>
        <div className='row-span-3 w-full mt-12 '>
          <div className='p-2 grid grid-cols-4 gap-2 place-items-center '>

            {

              dataitem && dataitem.images?.map((prod,index)=>(
                <div className={`p-2 cursor-pointer ${activeindeximage === index ? `border-2` : ''}`}   onClick={()=>handleimageclick(prod, index)}>
                <Image src={prod} width={200} height={200} className='w-full max-w-[100px]  object-contain'/>
              </div>
              ))
            }
          
          </div>
        </div>
      </div>
    </div>
    <div className='md:col-span-7 '>
      <div className='w-100 md:ml-20 flex flex-col mt-10'>
        <p className='text-xl font-bold max-w-[400px]'>{dataitem && dataitem.productname.toUpperCase()}</p>

        <div className='flex flex-row'>
        <p className='text-md text-zinc-400 font-bold mt-5 line-through'>₹ {dataitem && dataitem?.sizeprice[activepriceindex].mrp}</p>

        <p className='text-xl text-zinc-600 font-bold mt-5 ml-2'>₹ {dataitem && dataitem?.sizeprice[activepriceindex].offerprice}</p>


        </div>
        <div className='flex flex-row  h-fit gap-2 mt-2'>
          {
            dataitem && dataitem.sizeprice?.map((item,index)=>(

              <p className={`border-2 rounded-xl p-1 cursor-pointer  ${activepriceindex === index ? 'bg-gray-300': ''}`}  onClick={()=>setActivePriceIndex(index)}>{item.size}</p>
            ))
          }


        </div>
    

        <div className='flex flex-row justify-between w-full md:w-[160px] mt-5'>
          <div>
            <select className='rounded-xl border-2 p-1'>
              <option disabled selected> Color</option>
              {
                 dataitem && dataitem.colors?.map(item=>(
                  <option>{item}</option>
                 ))
              }
            </select>
          </div>
      
        </div>
        <div className='mt-5'>
          <div className='flex flex-row justify-start items-center'>
            <PlusCircleIcon className='cursor-pointer'  onClick={()=> handleincreaseitem(dataitem && dataitem.Id)} />

                {
                quantity.map(item=>(
                    item.Id === dataitem.Id ? 
                    <input type='number' value ={quantity.length === 0 ? 0 : item.quantity} className='w-[60px] border-2 focus:outline-none mx-2 my-2 px-4 rounded-lg'/> : 
                   ''
                ))
              }
         
            <MinusCircleIcon className='cursor-pointer' onClick={()=> handledecreaseitem(dataitem && dataitem.Id)}/>
          </div>
        </div>
        <div className='mt-10 flex flex-row w-full md:w-[160px] justify-between items-center'>

        {
                quantity.map(item=>(
                    item.Id === dataitem.Id ? 
                    <button className='rounded-xl bg-green-300 p-3' onClick={()=>handleAddToCart(item.Id, item.quantity)}>Add to cart</button> : 
                   ''
                ))
              }
         
          <Heart/>
        </div>
        <div className='mt-10 flex flex-row w-full md:w-[160px] items-center'>
          <button className='rounded-xl bg-green-300 p-3 flex'>AR view <Box className='ml-1'/></button>
        </div>
      </div>
    </div>
  </div>

  <div className='grid md:grid-cols-4 border-2 mt-24 place-items-center grid-cols-1'>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-r-2 p-2 w-full flex justify-center items-center cursor-pointer ${
            activeIndex === index ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleClick(index, item.toLowerCase())}
        >
          <p className='text-sm uppercase text-amber-600'>{item}</p>
        </div>
      ))}
    </div>
  <div className='flex w-full border-2 justify-center items-center  '>
      <ul className='list-none p-10'>
        <li>
            <p  className='text-justify'>
               {currentproductdetails}
            </p>
        </li>

      </ul>

  </div>
</div> */}
        <Footer/>
      
    </div>
  )
}

export default Product
