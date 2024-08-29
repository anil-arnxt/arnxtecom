import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Ecomcontext, useAppContext } from '@/context/Context'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { ArrowBigDown, ArrowBigUp, ArrowLeft, Delete, DeleteIcon, Heart, LucideDelete, Minus, MinusCircleIcon, Plus, PlusCircleIcon, ShoppingCart, Star, Truck } from 'lucide-react'
import axios from 'axios'
import Image from 'next/image'

const getwishlistitemurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getwishlistitemsarnxtecom'

const index = () => {

  const pathname = usePathname()

  const pathitem = pathname.split('/').slice(1).join('')
  const router = useRouter()

  const [wishlistitems, setWishlistItems] = useState()



    
  useEffect(() => {

  
    const getdata = async () => {
      try {
        const email = sessionStorage.getItem('email');
        const body = { Id: email };

        const res = await axios.post(getwishlistitemurl, body);
       
          setWishlistItems(res.data)
         

      } catch (error) {
        console.log(error);
      }
    };

    getdata();

  }, []);

  const handleBuynow = (id)=>{
     
    router.push(`/product/${id}`)

  }



  return (
    <div>
        <Navbar/>
        <div className='container mx-auto min-h-[500px] flex flex-col '>

<div className='mb-10 flex w-100 flex-row justify-between'>
  <p className='text-2xl font-bold text-green-900'>Your wishlist </p>
   
   <div className='flex flex-row'>

   <Heart size={30} className={`border-2 border-black p-1 rounded-full  ${pathitem === 'wishlist' ? 'bg-yellow-200': '' }  `} />

      <div className='border-t-4 w-[80px] mx-2 my-2 mt-2'>

      </div>

       <ShoppingCart  size={30} className={`border-2 border-black p-1 rounded-full  ${pathitem === 'cart' ? 'bg-yellow-200': '' }  `} />

   </div>
</div>

<table   >
<thead className=''>
             <tr className='border-2 border-teal-300 ' >
               <th>Product</th>

               <th>Add</th>
               <th>Price</th>
               <th>Remove</th>
             </tr>
           </thead>
           <tbody>
             {
               wishlistitems && wishlistitems.map((product,index)=>(

                 <tr  className='border-2 border-teal-300 '  >
                 <td className='flex justify-left items-left pt-10 pb-10'>
                   <div className='inline-flex flex-row  '>

                      <Image src= {product['product'].productmainimage} width={200} height={200} className='w-full max-w-[100px] p-2' />    

                      <div className='flex flex-col mx-5'>
                      <p className='w-auto text-md font-bold text-zinc-400 '>

                        {product['product'].productname.toUpperCase()}
                     </p>
                     <p  className='text-sm mt-10'>
                     {`${product['product'].productlength}*${product['product'].productwidth}*${product['product'].productheight}`} (L*W*H)
                     </p>

                     <div className=' flex mt-2'> <Star size={15} /> <Star  size={15}/>  </div>


                      </div>
                   
                   </div>
                 </td>
                 <td>
                      <button className='border-2 rounded-xl bg-green-300 p-2' onClick={()=> handleBuynow(product['product'].Id)}>
                         Buy now
                      </button>
                 </td>
                 <td>
                     <div className='flex justify-center items-center'>
                       <p className='font-bold text-xl'>
                          ₹ {product['product'].offerprice }

                       </p>
                        
                     </div>
                 </td>
                 <td>
                     <div className='flex justify-center items-center'>
                       <Delete className='cursor-pointer'/>
                        
                     </div>
                 </td>

               </tr>

               ))
             }
         

           </tbody>

</table>

<div className='flex flex-col sm:flex-row justify-between items-center mt-10 mb-20'>
<div className='flex flex-row items-center'>
<ArrowLeft />
<p className='text-xl ml-2'>Continue Shopping</p>
</div>

<div className='flex flex-col sm:flex-row items-center mt-4 sm:mt-0'>
<input placeholder='promocode' className='rounded-xl h-[40px] focus:outline-none border-2 pl-2 w-full sm:w-auto mb-4 sm:mb-0' />
<div className='flex flex-col sm:ml-2 text-center sm:text-left'>
<p className='text-xl font-bold'>
 

</p>
</div>

</div>
</div>

</div>

        <Footer/>
      
    </div>
  )
}

export default index
