import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { Box, Boxes, Heart, MinusCircleIcon, PlusCircleIcon } from 'lucide-react'




const Product = () => {

    const router = useRouter()
    const { pid } = router.query

    console.log(pid)

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
      setActiveIndex(index);
    };
  
    const items = [
      'Features',
      'Properties',
      'Care Instructions',
      'Warranty',
      'Returns',
      'Quality Promise'
    ];

 
  return (
    <div>
        <Navbar/>

        <div className='container mx-auto p-4 md:p-10'>
  <div className='grid md:grid-cols-12 grid-cols-1'>
    <div className='md:col-span-5 flex justify-center md:justify-start'>
      <div className='grid grid-rows-12 w-full md:w-[500px] place-items-center'>
        <div className='row-span-9 w-full flex justify-center'>
          <Image src='/images/washingmachine.png' width={400} height={400} className='w-full max-w-[400px]'/>
        </div>
        <div className='row-span-3 w-full'>
          <div className='p-2 grid grid-cols-4 gap-2 place-items-center'>
            <div className='border-2 p-2'>
              <Image src='/images/washingmachine.png' width={200} height={200} className='w-full max-w-[100px]'/>
            </div>
            <div className='border-2 p-2'>
              <Image src='/images/washingmachine.png' width={200} height={200} className='w-full max-w-[100px]'/>
            </div>
            <div className='border-2 p-2'>
              <Image src='/images/washingmachine.png' width={200} height={200} className='w-full max-w-[100px]'/>
            </div>
            <div className='border-2 p-2'>
              <Image src='/images/washingmachine.png' width={200} height={200} className='w-full max-w-[100px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='md:col-span-7'>
      <div className='w-full md:ml-20 flex flex-col mt-10'>
        <p className='text-xl font-bold max-w-[400px]'>LG 8 Kg 5 Star Inverter TurboDrum Fully Automatic Top Loading Washing Machine</p>
        <p className='text-xl text-zinc-600 font-bold mt-5'>₹ 14852</p>

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
          onClick={() => handleClick(index)}
        >
          <p className='text-sm uppercase text-amber-600'>{item}</p>
        </div>
      ))}
    </div>
  <div className='flex w-full border-2 justify-center items-center  '>
      <ul className='list-none p-10'>
        <li>
            <p  className='text-justify'>
            A contemporary looking coffee table which makes a chic centre piece in your living room
The glass table top and shelf below help make place for your coffee mugs, daily newspapers and magazines
Made of high grade Sheesham wood and 6 mm thick glass
Please refer to the dimensioned view image for details of the dimensions
No assembly required
For indoor use only 
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
