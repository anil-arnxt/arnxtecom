import { useRouter } from 'next/router'


import React, { useContext, useEffect, useState } from 'react'

import Image from 'next/image'
import { Box, Boxes, CircleArrowOutUpRight, CodeSquare, Heart, MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import axios from 'axios'
import { ImageZoom } from 'react-responsive-image-zoom';
import '@/pages/product/product.css'
import { Ecomcontext, useAppContext } from '@/context/context'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
import Link from 'next/link'
const addtocarturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/addtocartarnxtecommerce'


const Wallpapers = ({dataitem}) => {
    
    const {quantity , setQuantity} =   useAppContext()
        
    const [currentimage, setCurrentImage] = useState(dataitem && dataitem.productmainimage)
   const [currentproductdetails, setCurrentProductDetails] = useState(dataitem['care'])
   const [activeindeximage, setActiveIndexImage] = useState(0)
 

const [tempquantity, setTempQuantity] = useState(0)
const [activepriceindex, setActivePriceIndex] = useState(0)

const [currentquantity, setCurrentQuantity] = useState(0)

const handleimageclick = (value, index)=>{
      setActiveIndex(index)
     setActiveIndexImage(index)
}        

const [activeIndex, setActiveIndex] = useState(0);

const handleClick = (index, value) => {


 setActiveIndex(index);
 setCurrentProductDetails(dataitem[value])
};

const handleincreaseitem = (id)=>{

    setCurrentQuantity((prevData)=> prevData + 1)
}



const handledecreaseitem = (id)=>{



  setCurrentQuantity((prevData)=>
      prevData <  1 ? 0: 
    prevData - 1)

}



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
           quantity: currentquantity
         }
         

         try{

           const res = await axios.post(addtocarturl, body)
           console.log(res.data)

         }catch(error){
           console.log(error)
         }
           
        }else{
           toast.error('Please login first')
        }

}

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    console.log(currentquantity)


  return (


    <div className='container mx-auto p-4 md:p-10'>
     <Toaster/>
        
    <div className='grid md:grid-cols-12 grid-cols-1'>
      <div className='md:col-span-5 flex justify-center h-100 md:justify-start'>
        <div className='grid grid-rows-6 w-full md:w-[500px] place-items-center  '>
          <div className='row-span-10 w-full h-full  flex justify-center '>
          {
            isClient && 
  
          
                <ImageZoom
                src={dataitem && dataitem?.colorinput[activeIndex].image2}
                defaultZoomFactor={1.5}
                transition={0.5}
                breakpoints={[
                  { maxWidth: 768, zoomFactor: 1.2 },
                  { maxWidth: 1024, zoomFactor: 1.4 }
                ]}
              
              imgClassName=''
                debug={false}
              />
            
          
    
  }
           
          </div>
          <div className='row-span-2 w-full mt-12 rounded-xl'>
            <div className='p-2 grid grid-cols-4 gap-2 place-items-center '>
  
              {
  
                dataitem && dataitem.colorinput?.map((prod,index)=>(

                    index < 4 ? 
                  <div className={`p-2 cursor-pointer ${activeindeximage === index ? `border-2 border-green-200` : ''}`}   onClick={()=>handleimageclick(prod, index)}>
                  <Image src={prod.image} width={200} height={200} className='w-full max-w-[100px]  object-contain'/>
                </div> : ''
                ))
              }
            
            </div>
          </div>
        </div>
      </div>
      <div className='md:col-span-7 '>
        <div className='w-100 md:ml-20 flex flex-col mt-10'>
          <p className='text-xl font-bold max-w-[400px]'>{dataitem && dataitem.productname.toUpperCase()}</p>

           <div className='flex flex-col mt-2'>
            <p className='text-xs text-gray-400 max-w-xl text-justify'>
                {dataitem && dataitem.productdetails}
            </p>

           </div>
           <div className='flex flex-row gap-2'>
            <p className='text-md  mt-5'>Collection:</p>
          <p className='text-md   mt-5 '> {dataitem && dataitem?.collection}</p>
  
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-md  mt-5'>Patterno:</p>
          <p className='text-md   mt-5 '> {dataitem && dataitem?.colorinput[activeindeximage].patternno}</p>
  
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-md  mt-5'>Rollsize:</p>
          <p className='text-md   mt-5 '> {`${dataitem && dataitem.rollwidth} * ${dataitem && dataitem.rollheight} `} meters </p>
  
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-md  mt-5'>Mrp/roll:</p>
          <p className='text-md   mt-5 '> ₹ {dataitem && dataitem?.offerprice}</p>
  
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-md  mt-5'>Mrp/Sqft:</p>
          <p className='text-md   mt-5 '> ₹ {dataitem && dataitem?.offerpricesqft}</p>
  
          </div>
  
      
          <div className='mt-5'>
            <div className='flex flex-row justify-start items-center'>
              <PlusCircleIcon className='cursor-pointer'  onClick={()=> handleincreaseitem(dataitem && dataitem.Id)} />
  
              
                    
                      <input type='number' value ={ currentquantity} className='w-[60px] border-2 focus:outline-none mx-2 my-2 px-4 rounded-lg'/>
                 
                
           
              <MinusCircleIcon className='cursor-pointer' onClick={()=> handledecreaseitem(dataitem && dataitem.Id)}/>
            </div>
          </div>
          <div className='mt-10 flex flex-row w-full md:w-[160px] justify-between items-center'>
  
         
                      <button className='rounded-xl bg-green-300 p-3' onClick={()=>handleAddToCart(quantity[0]?.Id, quantity[0]?.quantity)}>Add to cart</button>
             
           
            <Heart/>
          </div>
          <div className='mt-10 flex flex-row w-full md:w-[160px] items-center'>

            <Link href={`https://visualiser.arnxt.com/walls?brand=${dataitem.brandname}`} target='_blank'> <button className='rounded-xl bg-green-300 p-3 flex'>Try and buy <CircleArrowOutUpRight className='ml-1'/></button></Link>
           
          </div>
        </div>
      </div>
    </div>
  
    <div className='grid md:grid-cols-3  mt-24 place-items-center grid-cols-1'>
     
          <div
             
            className={` p-2 w-full flex justify-center items-center bg-black` }
           
          >
            <p className='text-sm uppercase text-white '>Product Details</p>
          </div>
      
      </div>
    <div className='flex flex-col w-100 border-2 justify-start items-start p-2 '>

          <div className='flex flex-col justify-start items-start mt-2 gap-2 border-b-2 pb-5'>
             <h2 className='font-bold'>{dataitem && dataitem.designname}</h2>

             <p className='text-sm'>{dataitem && dataitem.designdetails}</p>
            

          </div>

          <div className='flex flex-col mt-4 ml-2'>
            <h2 className='font-medium'>  Item details </h2>
          <ul className='list-disc p-5 mt-2'>

            {

                dataitem && dataitem.itemdetails?.map(item=>(
                    <li>
                    <p  className='text-justify'>
                       {item}
                    </p>
                </li>

                ))
            }
    
  
        </ul>

          </div>
    
  
    </div>
  </div>
  )
}

export default Wallpapers
