import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { Box, Boxes, Heart, MinusCircleIcon, PlusCircleIcon } from 'lucide-react'
import axios from 'axios'

const getsingleproducturl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getsinglearnxtecomproduct'



export async function getStaticProps({ params }) {
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

export async function getStaticPaths() {


  return {
    paths: [],
    fallback: 'blocking', 
  };
}

const Product = ({dataitem}) => {

 
        console.log(dataitem)

        const [currentproductdetails, setCurrentProductDetails] = useState(dataitem['features'])


        const handledetailsclick = (value)=>{
              

       

        }

        

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index, value) => {
      setActiveIndex(index);
      setCurrentProductDetails(dataitem[value])
    };
  
    const items = [
      'Features',
      'Properties',
      'Care',
      'Warrantydetails',
      'Returns',
      'QualityPromise'
    ];

 
  return (
    <div>
        <Navbar/>

        <div className='container mx-auto p-4 md:p-10'>
  <div className='grid md:grid-cols-12 grid-cols-1'>
    <div className='md:col-span-5 flex justify-center md:justify-start'>
      <div className='grid grid-rows-12 w-full md:w-[500px] place-items-center'>
        <div className='row-span-9 w-full flex justify-center'>
          <Image src={dataitem && dataitem.productmainimage} width={400} height={400} className='w-full max-w-[400px]'/>
        </div>
        <div className='row-span-3 w-full'>
          <div className='p-2 grid grid-cols-4 gap-2 place-items-center'>

            {

              dataitem && dataitem.productrestimage?.map((prod,index)=>(
                <div className='border-2 p-2'>
                <Image src={prod} width={200} height={200} className='w-full max-w-[100px]'/>
              </div>
              ))
            }
          
          </div>
        </div>
      </div>
    </div>
    <div className='md:col-span-7'>
      <div className='w-full md:ml-20 flex flex-col mt-10'>
        <p className='text-xl font-bold max-w-[400px]'>{dataitem && dataitem.productname.toUpperCase()}</p>

        <div className='flex flex-row'>
        <p className='text-md text-zinc-400 font-bold mt-5 line-through'>₹ {dataitem && dataitem.mrp}</p>

        <p className='text-xl text-zinc-600 font-bold mt-5 ml-2'>₹ {dataitem && dataitem.offerprice}</p>


        </div>

        <div className='flex flex-row justify-between w-full md:w-[160px] mt-5'>
          <div>
            <select className='rounded-xl border-2'>
              <option disabled selected> Color </option>
            </select>
          </div>
          <div>
            <select className='rounded-xl border-2'>
              <option disabled selected> Size </option>
            </select>
          </div>
        </div>
        <div className='mt-5'>
          <div className='flex flex-row justify-start items-center'>
            <PlusCircleIcon className='cursor-pointer'/>
            <input type='number' value={1} className='w-[60px] border-2 focus:outline-none mx-2 my-2 px-4 rounded-lg'/>
            <MinusCircleIcon className='cursor-pointer'/>
          </div>
        </div>
        <div className='mt-10 flex flex-row w-full md:w-[160px] justify-between items-center'>
          <button className='rounded-xl bg-green-300 p-3'>Add to cart</button>
          <Heart/>
        </div>
        <div className='mt-10 flex flex-row w-full md:w-[160px] items-center'>
          <button className='rounded-xl bg-green-300 p-3 flex'>AR view <Box className='ml-1'/></button>
        </div>
      </div>
    </div>
  </div>

  <div className='grid md:grid-cols-6 border-2 mt-10 place-items-center grid-cols-1'>
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
</div>
        <Footer/>
      
    </div>
  )
}

export default Product
