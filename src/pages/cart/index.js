import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowBigDown, ArrowBigUp, ArrowLeft, Delete, DeleteIcon, LucideDelete, Minus, MinusCircleIcon, Plus, PlusCircleIcon, ShoppingCart, Star, Truck } from 'lucide-react'
import { useRouter } from 'next/router'
import { Ecomcontext, useAppContext } from '@/context/context'

const index = () => {

  const pathname = usePathname()

  const pathitem = pathname.split('/').slice(1).join('')
  const router = useRouter()

  const handlecheckout = ()=>{
      router.push('/checkout')
  }

  const {cartdata,setCartData, setSubTotal, subtotal} = useAppContext()



  useEffect(()=>{

    const total = cartdata && cartdata.reduce((accumulator, item) => {
      return accumulator + item['product'].offerprice * item['quantity'];
    }, 0);

    setSubTotal(total)

 

  },[cartdata])

  const handleincreaseitem = (id)=>{

    const newarr = cartdata && cartdata.map((item) => {
      if (item['product'].Id === id) {
       
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });


    setCartData(newarr);
  
}

const handledecreaseitem = (id)=>{

  const newarr = cartdata && cartdata.map((item) => {
    if (item['product'].Id === id) {
     
      return { ...item,  quantity: item.quantity === 0 ? 0 : item.quantity - 1 };
    }
    return item;
  });


  setCartData(newarr);

}



 
  return (
    <div>
      <Navbar/>


      <div className='container mx-auto min-h-[500px] flex flex-col '>

         <div className='mb-10 flex w-100 flex-row justify-between'>
           <p className='text-2xl font-bold text-green-900'>Shopping cart </p>
            
            <div className='flex flex-row'>

            <ShoppingCart size={30} className={`border-2 border-black p-1 rounded-full  ${pathitem === 'cart' ? 'bg-yellow-200': '' }  `} />

               <div className='border-t-4 w-[80px] mx-2 my-2 mt-2'>

               </div>

                <Truck  size={30} className={`border-2 border-black p-1 rounded-full  ${pathitem === 'checkout' ? 'bg-yellow-200': '' }  `} />

            </div>
         </div>

         <table   >
         <thead className=''>
                      <tr className='border-2 border-teal-300 ' >
                        <th>Product</th>

                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartdata && cartdata.map((product,index)=>(

                          <tr  className='border-2 border-teal-300 '  >
                          <td className='flex justify-left items-left pt-10 pb-10'>
                            <div className='inline-flex flex-row  '>

                               <Image src= {product['product'].productmainimage} width={200} height={200} className='w-full max-w-[100px]' />    

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
                              <div className='flex flex-row justify-center items-center'>
                                  <PlusCircleIcon className='cursor-pointer' onClick={()=>handleincreaseitem(product['product'].Id)} />
                                 <input type='number' value={product['quantity']} className='w-[60px] border-2 focus:outline-none mx-2 my-2 px-4 rounded-lg'/>
                                   <MinusCircleIcon className='cursor-pointer' onClick={()=>handledecreaseitem(product['product'].Id)}/>
                              </div>
                          </td>
                          <td>
                              <div className='flex justify-center items-center'>
                                <p className='font-bold text-xl'>
                                   ₹ {product['product'].offerprice * product['quantity']}

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
        <p className='text-xl font-bold'>Subtotal ₹ {subtotal}
          
         
        </p>
      </div>
      <button className='rounded-xl bg-green-300 p-5 ml-0 sm:ml-5 w-full sm:w-auto' onClick={handlecheckout}>
        CHECKOUT
      </button>
    </div>
  </div>

      </div>

     

        <Footer/>
      
    </div>
  )
}

export default index
