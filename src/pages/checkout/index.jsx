import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowBigDown, ArrowBigUp, ArrowLeft, Delete, DeleteIcon, LucideDelete, Minus, MinusCircleIcon, Plus, PlusCircleIcon, ShoppingCart, Truck } from 'lucide-react'
import { useRouter } from 'next/router'

const index = () => {

    const pathname = usePathname()

    const pathitem = pathname.split('/').slice(1).join('')
    const router = useRouter()

    const handlegoback = ()=>{
        router.push('/cart')
    }
  return (
<div>
      <Navbar/>


      <div className='container mx-auto min-h-[500px] flex flex-col '>

         <div className='mb-10 flex w-100 flex-row justify-between'>
           <p className='text-2xl font-bold text-green-900'>Shipping and payment </p>
            
            <div className='flex flex-row'>

            <ShoppingCart size={30} className={`border-2 border-black p-1 rounded-full  ${pathitem === 'cart' ? 'bg-yellow-200': '' }  `} />

               <div className='border-t-4 w-[80px] mx-2 my-2 mt-2'>

               </div>

                <Truck  size={30} className={`border-2 border-black p-1 rounded-full  ${pathitem === 'checkout' ? 'bg-yellow-200': '' }  `} />

            </div>
         </div>

           <div className='flex flex-col container mx-auto'>

            <div className='grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3 '>
                <div className='p-5 border-l-2'>
                    <div>
                        <p className='text-lg font-bold text-grey-400'>
                            Shipping Address
                        </p>
                    </div>
                    <div className='flex flex-col flex-wrap gap-1 '>

                        <div className='flex flex-row gap-2 mt-5 '>
                        <input placeholder='First name' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        <input placeholder='Last name' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        </div>
                        <div className='flex flex-row gap-2 mt-2'>
                        <input placeholder='House/Building name' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        <input placeholder='Locality' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        </div>
                        <div className='flex flex-row gap-2 mt-2'>
                        <input  placeholder='Town/city' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        <input placeholder='Pin' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        </div>
                        <div className='flex flex-row gap-2 mt-2'>
                        <select  className='border-2 rounded-lg w-full h-[40px] pl-2' >
                        <option disabled selected>
                              City
                        </option>
                        <option>Kolkata</option>

                        </select>
                        <select  className='border-2 rounded-lg w-full h-[40px] pl-2' >
                        <option  disabled selected>
                          State
                        </option>
                        <option>Westbengal</option>

                        </select>
                        </div>
                        <div className='flex flex-row gap-2 mt-2'>
                        <input  placeholder='Company name' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        <input placeholder='GST NO' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        </div>
                     
                  


                    </div>

                    <div className='mt-5'>
                        <p className='text-lg font-bold text-grey-400'>
                            Billing Address
                        </p>
                        <div className='inline-flex gap-2'>
                        <input type='checkbox'/>
                        <p className='text-sm font-bold text-slate-500'>Same as shipping</p>
                        </div>
                     
                    </div>
                    <div className='flex flex-col flex-wrap gap-1 '>

                        <div className='flex flex-row gap-2 mt-5 '>
                        <input placeholder='First name' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        <input placeholder='Last name' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        </div>
                        <div className='flex flex-row gap-2 mt-2'>
                        <input placeholder='House/Building name' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        <input placeholder='Locality' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        </div>
                        <div className='flex flex-row gap-2 mt-2'>
                        <input  placeholder='Town/city' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        <input placeholder='Pin' className='border-2 rounded-lg w-full h-[40px] pl-2' />
                        </div>
                     
                        <div className='flex flex-row gap-2 mt-2'>
                        <select  className='border-2 rounded-lg w-full h-[40px] pl-2' >
                        <option disabled selected>
                              City
                        </option>
                        <option>Kolkata</option>

                        </select>
                        <select  className='border-2 rounded-lg w-full h-[40px] pl-2' >
                        <option  disabled selected>
                          State
                        </option>
                        <option>Westbengal</option>

                        </select>
                        </div>
                     
                  


                    </div>
                </div>
                <div className='p-5 border-l-2'>
                <div>
                        <p className='text-lg font-bold text-grey-400'>
                            Courier partner
                        </p>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <div className='flex flex-row w-full justify-between gap-2 '>
                        <div className='flex flex-row p-3 rounded-xl justify-center items-center border-2 h-[50px] w-100'>
                        <div>
                                <p> DHL</p>
                               </div>
                               <div className=' flex   ml-2'>
                                <img src='/images/dhl.svg' className='w-full h-full object-cover' />

                               </div>
                             
                          </div>
                          <div className='flex flex-row p-3 rounded-xl justify-center items-center border-2 h-[50px] w-100'>
                        <div>
                                <p>India post</p>
                               </div>
                               <div className=' flex   ml-2'>
                                <img src='/images/inpost.svg' className='w-full h-full object-cover' />

                               </div>
                             
                          </div>
                          <div className='flex flex-row p-3 rounded-xl justify-center items-center border-2 h-[50px] w-100'>
                        <div>
                                <p> DPD</p>
                               </div>
                               <div className=' flex   ml-2'>
                                <img src='/images/dpd.svg' className='w-full h-full object-cover' />

                               </div>
                             
                          </div>
                      

                        </div>

                      

                    </div>

                    <div className='mt-5'>
                        <p className='text-lg font-bold text-grey-400'>
                            Payment partner
                        </p>
                    </div>
                    <div className='flex flex-col mt-5'>
                        <div className='flex flex-col w-full justify-between gap-2 '>
                        <div className='flex flex-row p-3 rounded-xl justify-center items-center border-2 h-auto w-100'>
                    
                               <div className=' flex h-[40px]  ml-2'>
                                <img src='/images/razorpay-icon.svg' className='w-full h-full object-cover' />

                               </div>
                             
                          </div>
                          <div className='flex flex-row p-3 rounded-xl justify-center items-center border-2 h-auto w-100'>
                     
                               <div className=' flex h-[40px] ml-2'>
                                <img src='/images/paypal-icon.svg' className='w-full h-full object-cover' />

                               </div>
                             
                          </div>
                      
                      

                        </div>

                      

                    </div>
                </div >
                <div className='p-5 border-l-2'>
                <div>
                        <p className='text-lg font-bold text-grey-400'>
                            Order Breakup
                        </p>
                    </div>

                    <div className='flex flex-col w-full mt-5'>
                        <div className='flex border-b-2 flex-row justify-between p-2'>

                          <p>
                            Subtotal 
                          </p>
                          <p>₹ 36800</p>

                        </div>
                        <div className='flex border-b-2 flex-row justify-between p-2 mt-2'>

                          <p>
                           GST (18%)
                          </p>
                          <p>₹ 4500</p>

                        </div>
                        <div className='flex border-b-2 flex-row justify-between p-2 mt-2'>

                          <p>
                            Courier charges
                          </p>
                          <p>₹ 450</p>

                        </div>
                        <div className='flex  flex-row justify-end p-2 mt-2'>

                             <div className='flex flex-row'>
                                 <p className='text-xl font-bold'>Total :</p>
                                 <p className='ml-2 text-xl font-bold'> ₹ 450</p>
                             </div>
                          

                           </div>

                    </div>
                </div>

            </div>

           </div>


         <div className='flex flex-row justify-between items-center  mt-10 mb-20 h-[60px]'> 

          <div className='flex flex-row h-auto'>
          <ArrowLeft className='cursor-pointer' onClick={handlegoback} />
            <p className='text-xl'>Go back</p>
           
          </div>
       
         <div className='flex flex-row justify-center items-center'>
         <div className='ml-5'>
            <button className='rounded-xl bg-transparent p-5 border-2'  >
             Continue shopping
            </button>
          </div>
          
          <div className='ml-5'>
            <button className='rounded-xl bg-green-300 p-5'  >
               Make payment
            </button>
          </div>

         </div>
     


        
        </div>

      </div>

     

        <Footer/>
      
    </div>
  )
}

export default index
