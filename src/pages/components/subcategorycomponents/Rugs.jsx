import { Heart } from 'lucide-react'
import { Router, useRouter } from 'next/router'
import React from 'react'

const Rugs = ({filterData}) => {

  console.log(filterData)
  const router = useRouter()

  const handlebuynow = (Id)=>{
    router.push(`/product/${Id}`)
  }
  return (
    <div>

<div className='grid grid-cols-1 md:grid-cols-3 w-full gap-2 h-[600px] overflow-y-scroll no-scrollbar mt-10 place-items-center'>
      {
              filterData && filterData.map((product,index)=>(

                <div key={product.Id} className='h-auto w-[250px] shadow-lg rounded-xl p-2 '>
                <div className='relative top-5 flex justify-between mb-4'>
 
                  <button className='w-auto bg-red-300 rounded-3xl p-1 '>

                  {
                        product.sizeprice?.map((item,index)=>(

 
                             index === 0  ? 
                             <div>
                                <p className='text-xs'>   { Math.round( (Number(item.mrp) - Number(item.offerprice) )/ Number(item.mrp)*100)}%</p>
                   

                                </div> : ''
                           
                        ))
                    }
                 
                     
                  </button>
                <Heart className='cursor-pointer' />
              
 
                </div>
                 <div className='flex justify-center items-center w-full h-[250px] mt-5'>
                     <img src={product.images[0]} className='object-contain w-full h-full roundex-xl'/>
                  </div>
              
               <div className='mt-2'>
               <p className='text-l text-zinc-400 font-bold'>
      {product.productname.length > 50 
        ? `${product.productname.toUpperCase().substring(0, 50)}...` 
        : product.productname.toUpperCase()}
    </p>
               </div>
                <div className='flex flex-row justify-between mt-2'>

                    {
                        product.sizeprice?.map((item,index)=>(

 
                             index === 0  ? 
                             <div>
                          
                
                        <p className='mt-2 font-bold '>₹ {item.offerprice} </p>


                                 
                             <p className='mt-2 text-xs'>{item.size} cm</p>
                            <button className='rounded-xl bg-green-300 mt-2 p-2'  onClick={()=> handlebuynow(product.Id)}   >
                              Buy now

                            </button>

                                </div> : ''
                           
                        ))
                    }
                  
             
 
                </div>
           
 
           </div>

              ))
            }

    

      </div>
      
    </div>
  )
}

export default Rugs
