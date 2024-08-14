import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import { BadgeIndianRupee, Box, CircleCheckBig, CirclePercent, CreditCard, HandCoins, Heart, MessageCircleHeart, Truck } from 'lucide-react'
import Image from 'next/image'
import Footer from './components/Footer'

const index = () => {
  return (
    <div >
        <Navbar/>
        <Banner/>

        <div className='flex w-100 justify-center items-center mt-10 flex-wrap'>

          <div className='container flex flex-row flex-wrap justify-center items-center'>
            <div className='flex flex-row ml-5 mr-5'>
            <Truck size={50}  color='red'/>
            <div className='flex flex-col ml-5 mt-2'>
              <p className='text-sm font-bold'>  All purchases over 15000 </p>
              <p className='text-xs'>   are eligible for free shipping.</p>

            </div>
       
            </div>
            <div className='flex flex-row ml-5 mr-5'>
            <CreditCard size={50}  color='grey'/>
            <div className='flex flex-col ml-5 mt-2'>
              <p className='text-sm font-bold'>    All payments are processed instantly </p>
              <p className='text-xs'>  over a secure payment protocol</p>

            </div>
           
          
            </div>
            <div className='flex flex-row ml-5 mr-5'>
            <CirclePercent   size={50}  color='green'/>
            <div className='flex flex-col ml-5 mt-2'>
              <p className='text-sm font-bold'>  Money-Back Guarantee </p>
              <p className='text-xs'> If an item arrived damaged or you've changed your mind, you can send it
              back for a full refund</p>

            </div>
           
          
            </div>

          </div>

        </div>
        <div className=' flex flex-row w-100 flex-wrap justify-between p-10 items-center mt-10 mb-10'>

          <div className='h-auto w-[350px] shadow-lg rounded-xl p-2'>
              <Image src='/images/category1.jpg'className='rounded-xl' width={350} height={600}/>  
              <p className='text-xl font-bold mt-2 text-zinc-400'>Electrical Applicances</p>
               <button className='bg-green-300 rounded-xl border-zinc-400 p-2 mt-2 '>
                Explore Now
               </button>

          </div>
          <div className='h-auto w-[350px] shadow-lg rounded-xl p-2'>
          <Image src='/images/category2.jpg' className='rounded-xl' width={350} height={400}/>  
          <p className='text-xl font-bold mt-2 text-zinc-400'  > Home Decor</p>
          <button className='bg-green-300 rounded-xl border-zinc-400 p-2 mt-2 '>
                Explore Now
               </button>

</div>
<div className='h-auto w-[350px] shadow-lg rounded-xl p-2'>
<Image src='/images/category3.jpg' className='rounded-xl' width={350} height={600}/>  
<p className='text-xl font-bold mt-2 text-zinc-400'>Rugs and carpets</p>
<button className='bg-green-300 rounded-xl border-zinc-400 p-2 mt-2 '>
                Explore Now
               </button>
</div>
<div className='h-auto w-[350px] shadow-lg rounded-xl p-2'>
<Image src='/images/category4.jpg' className='rounded-xl' width={350} height={600}/>  
<p className='text-xl font-bold mt-2 text-zinc-400'>Wallpaper & Flooring</p>
<button className='bg-green-300 rounded-xl border-zinc-400 p-2 mt-2 '>
                Explore Now
               </button>
</div>

        </div>

         <div className='flex w-100 justify-center items-center mt-10 mb-10'>
          <h2 className='text-xl text-zinc-400 font-bold'>
            Why should you choose us ?
          </h2>


         </div>

        <div className=' flex flex-row w-100 flex-wrap justify-center p-10 items-center mt-10 mb-10'>

        

<div className='h-auto w-[350px] shadow-lg rounded-xl p-2 m-5'>
     <Truck size={60} enableBackground/> 

     <div className='flex flex-col'>
     <p className='text-l font-bold mt-2 text-zinc-400'>Free shipping</p>
     <p className='mt-2 text-xs'>All purchases over $199 are eligible for free shipping via USPS First Class Mail.</p>


     </div>
 

</div>
<div className='h-auto w-[350px] shadow-lg rounded-xl p-2 m-5'>
          <HandCoins size={60} />

     <div className='flex flex-col'>
     <p className='text-l font-bold mt-2 text-zinc-400'>Easy Payments</p>
     <p className='mt-2 text-xs'>All payments are processed instantly over a secure payment protocol.</p>


     </div>
 

</div>
<div className='h-auto w-[350px] shadow-lg rounded-xl p-2 m-5'>
    
     <BadgeIndianRupee  size={60} enableBackground/>

     <div className='flex flex-col'>
     <p className='text-l font-bold mt-2 text-zinc-400'>Money-Back Guarantee</p>
     <p className='mt-2 text-xs'>If an item arrived damaged or you've changed your mind, you can send it back for a full refund.</p>


     </div>
 

</div>
<div className='h-auto w-[350px] shadow-lg rounded-xl p-2 m-5'>
    
     <CircleCheckBig  size={60} enableBackground />

     <div className='flex flex-col'>
     <p className='text-l font-bold mt-2 text-zinc-400'>Finest Quality</p>
     <p className='mt-2 text-xs'>Designed to last, each of our products has been crafted with the finest materials.</p>


     </div>
 

</div>
</div>

<div className='container mx-auto flex w-100 justify-between  mt-10 mb-10'>
          <h2 className='text-xl text-black-400 font-bold'>
            Featured Products
          </h2>
          <button className='rounded-2xl bg-slate-300 p-3'>Show All</button>


         </div>

        <div className='container mx-auto flex flex-wrap w-100 justify-between items-center mt-10 mb-10'>

        <div className='h-auto w-[250px] shadow-lg rounded-xl p-2'>
               <div className='relative top-5 flex justify-between mb-4'>

                 <button className='w-auto bg-red-300 rounded-3xl p-1 '>
                  10%
                    
                 </button>
               <Heart className='cursor-pointer' />
             

               </div>
              <Image src='/images/washingmachine.png'className='rounded-xl' width={250} height={900}/>  
              <div className='mt-2'>
                 <p className='text-l text-zinc-400 font-bold'>
                   Front load washing machine 

                 </p>
              </div>
               <div className='flex flex-row justify-between mt-2'>
                <p className='mt-2'>₹ 14000   </p>
                <button className='rounded-xl bg-green-300 p-2' >
                  Buy now
                </button>

               </div>
          

          </div>
          <div className='h-auto w-[250px] shadow-lg rounded-xl p-2'>
               <div className='relative top-5 flex justify-between mb-4'>

                 <button className='w-auto bg-red-300 rounded-3xl p-1 '>
                  30%
                    
                 </button>
               <Heart className='cursor-pointer' />
             

               </div>
              <Image src='/images/washingmachine.png'className='rounded-xl' width={250} height={900}/>  
              <div className='mt-2'>
                 <p className='text-l text-zinc-400 font-bold'>
                   Front load washing machine 

                 </p>
              </div>
               <div className='flex flex-row justify-between mt-2'>
                <p className='mt-2'>₹ 14000   </p>
                <button className='rounded-xl bg-green-300 p-2' >
                  Buy now
                </button>

               </div>
          

          </div>
          <div className='h-auto w-[250px] shadow-lg rounded-xl p-2'>
               <div className='relative top-5 flex justify-between mb-4'>

                 <button className='w-auto bg-red-300 rounded-3xl p-1 '>
                  20%
                    
                 </button>
               <Heart className='cursor-pointer' />
             

               </div>
              <Image src='/images/washingmachine.png'className='rounded-xl' width={250} height={900}/>  
              <div className='mt-2'>
                 <p className='text-l text-zinc-400 font-bold'>
                   Front load washing machine 

                 </p>
              </div>
               <div className='flex flex-row justify-between mt-2'>
                <p className='mt-2'>₹ 14000   </p>
                <button className='rounded-xl bg-green-300 p-2' >
                  Buy now
                </button>

               </div>
          

          </div>
          <div className='h-auto w-[250px] shadow-lg rounded-xl p-2'>
               <div className='relative top-5 flex justify-between mb-4'>

                 <button className='w-auto bg-red-300 rounded-3xl p-1 '>
                  20%
                    
                 </button>
               <Heart className='cursor-pointer' />
             

               </div>
              <Image src='/images/washingmachine.png'className='rounded-xl' width={250} height={900}/>  
              <div className='mt-2'>
                 <p className='text-l text-zinc-400 font-bold'>
                   Front load washing machine 

                 </p>
              </div>
               <div className='flex flex-row justify-between mt-2'>
                <p className='mt-2'>₹ 14000   </p>
                <button className='rounded-xl bg-green-300 p-2' >
                  Buy now
                </button>

               </div>
          

          </div>

        </div>

        <div className='container mx-auto flex w-100 justify-center flex-wrap mt-20 mb-10'>
          <div className='bg-orange-100 flex justify-center items-center flex-col p-5 m-5 rounded-xl'>
            <div>
            <Box size={70} />
            </div>
            <h1 className='text-zinc-400 text-3xl font-bold'>
              Try products at your place with ease.
            </h1>

            <p className='mt-2'> Exprience the ultimate experience of seeing products at your place and then buy it </p>

          </div>
          <div className='flex justify-center items-center  m-5 '>
            <Image src='/images/argif.gif'  width={600} height={600} className='rounded-xl'/>

          </div>

        </div>

        <div className='mt-20 w-100 h-[300px] mb-20 flex container mx-auto justify-center items-center' style={ {backgroundImage : "url('/images/subscribe.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} >
          <div  className='flex flex-row w-full flex-wrap justify-center items-center'>
            
              <div className='m-5'>
                <h1 className='text-2xl text-white font-bold'>
                Subscribe to our newsletter and receive exclusive offers every week
                </h1>
              </div>
              <div className='flex flex-row m-5'>
                 <input className='rounded-xl bg-white m-5 w-[300px] h-[40px]'/>
                <button className='rounded-xl bg-yellow-300 m-5 h-[40px] p-2'>
                   Subscribe
                </button>


              </div>
          </div>

        </div>
       
      <Footer/>
    </div>
  )
}

export default index
