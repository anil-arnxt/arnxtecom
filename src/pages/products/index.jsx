import React, { useState, useEffect, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { ArrowUpRightFromSquare, ChevronRightIcon, Filter, Heart, IndentDecrease, IndentIncrease, Settings2 } from 'lucide-react';
import Image from 'next/image';

import ReactPaginate from "react-paginate"; 
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; 
import { IconContext } from "react-icons"; 
import '@/pages/products/products.css'


const index = () => {

    const [page, setPage] = useState(0);

const n = 3

const data = ['fadsf', 'fasfda', 'fasdfasdf', 'fasfdsa','fadsf', 'fasfda', 'fasdfasdf', 'fasfdsa']


const filterData = useMemo(() => {
    return data.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
    })
}, [page])

    const [value, setValue] = useState([100, 60000]);

    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropDown] = useState(false)

    const toggleFilter = () => {
      setIsOpen(!isOpen);
    };

    const handledropdowntoggle = () =>{
        setDropDown(!dropdown)
    }
  return (

    <div >
        <Navbar/>

        <div className='md:hidden  flex flex-col justify-center items-center'>
            <div className='flex flex-row gap-2 py-2' onClick={toggleFilter}>
             <div>
               
                <p className='text-lg text-zinc-400'> Filter</p>
             </div>
             <div className='mt-1'>
                <Filter size={20}/>
             </div>

            </div>

        </div>

        <div
        className={`fixed inset-0 bg-black z-40 mt-20 bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleFilter}
      >

<div
        className={`fixed top-0 left-0 mt-20 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        <div className='p-4'>
          <h2 className='text-xl font-semibold'>Filters</h2>

          <div className='flex col-span-3 mt-2 flex-col no-scrollbar overflow-y-scroll '>

<div className='flex flex-col border-2 p-5'>
    <div className='mt-5'>
        <p className='text-xl font-bold'>
            Product Category

        </p>

    </div>
    <div className='mt-2'>
        <ul className='list-none flex flex-col gap-2'>
            <li>
                 <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                    Furniture
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
             <li>
                 <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                   Electical
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
             <li>
                 <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                   Rugs
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
             <li>
                 <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                    Wallpapers
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
      
              </ul>

    </div>
    
</div>

<div className='flex flex-col border-2 p-5 mt-5'>
    <div className='mt-5'>
        <p className='text-xl font-bold'>
            Price

        </p>

        <div className='mt-5'>
        <RangeSlider

value={value}

min={100}
max={60000}
step={5}
/>
        </div>



    </div>

    
</div>
<div className='flex flex-col border-2 mt-5 p-5'>
    <div className='mt-5'>
        <p className='text-xl font-bold'>
            Color

        </p>

    </div>
    <div className='mt-2'>
        <ul className='list-none flex flex-col gap-2'>
            <li>
                 <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                    Red
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
             <li>
                 <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                   Green
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
             <li>
                 <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                   Blue
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
             <li>
                 <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                  <p>
                    White
                  </p>
                  <input type='checkbox'/>
                 </div>
             </li>
      
              </ul>

    </div>
    
</div>


</div>
     
        </div>
      </div>
    

      </div>

<div className='container grid grid-cols-12 mx-auto w-full  h-[600px] mb-40 gap-2'>

     <div className='hidden md:flex md:col-span-3 flex-col no-scrollbar overflow-y-scroll '>

        <div className='flex flex-col border-2 p-5'>
            <div className='mt-5'>
                <p className='text-xl font-bold'>
                    Product Category

                </p>

            </div>
            <div className='mt-2'>
                <ul className='list-none flex flex-col gap-2'>
                    <li>
                         <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                            Furniture
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
                     <li>
                         <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                           Electical
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
                     <li>
                         <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                           Rugs
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
                     <li>
                         <div className='inline-flex hover:border-gray-400 border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                            Wallpapers
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
              
                      </ul>

            </div>
            
        </div>

        <div className='flex flex-col border-2 p-5 mt-5'>
            <div className='mt-5'>
                <p className='text-xl font-bold'>
                    Price

                </p>

                <div className='mt-5'>
                <RangeSlider
        
        value={value}
     
        min={100}
        max={60000}
        step={5}
      />
                </div>

      

            </div>
       
            
        </div>
        <div className='flex flex-col border-2 mt-5 p-5'>
            <div className='mt-5'>
                <p className='text-xl font-bold'>
                    Color

                </p>

            </div>
            <div className='mt-2'>
                <ul className='list-none flex flex-col gap-2'>
                    <li>
                         <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                            Red
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
                     <li>
                         <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                           Green
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
                     <li>
                         <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                           Blue
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
                     <li>
                         <div className='inline-flex border-2 w-full rounded-xl justify-between p-2'>
                          <p>
                            White
                          </p>
                          <input type='checkbox'/>
                         </div>
                     </li>
              
                      </ul>

            </div>
            
        </div>


     </div>
     <div className='md:col-span-9  col-span-12 '>

          <div className='flex flex-row justify-between mt-2 '>
            <div className='flex ml-5'>
                <p className='text-lg text-slate-400 font-bold'>All </p>
                <p  className='text-lg text-slate-300 ml-1'>(135)</p>
                 

            </div>

            <div className='md:hidden mr-4 ' onClick={handledropdowntoggle}>
                
            <Settings2 />
            

            </div>
            <div  style={{display: dropdown? 'flex' : 'none' }} className={`md:hidden w-full h-[120px] flex flex-col absolute mt-6 z-30 bg-white`}>
                <div className='inline-flex justify-between p-5'>

                    <p>Show Product: </p>
                    <select className='rounded-xl border-2'>
                            <option  >Popular</option>
                            <option  >New</option>

                        </select>

                </div>
                <div className='inline-flex justify-between p-5'>

<p>Sort By: </p>
<select className='rounded-xl border-2'>
        <option  >Popular</option>
        <option  >New</option>

    </select>

</div>

            </div>

            <div className='hidden md:flex flex-row justify-evenly pr-5'>

                <div className='inline-flex gap-2'>

                    <p className='text-md font-bold'>Show product: </p>

                    <div>
                        <select className='rounded-xl border-2'>
                            <option  >Popular</option>
                            <option  >New</option>

                        </select>
                    </div>

                </div>
                <div className='inline-flex gap-2 ml-5'>

<p className='text-md font-bold'>Sort By: </p>

<div>
    <select className='rounded-xl border-2'>
        <option  >Popular</option>
        <option  >New</option>

    </select>
</div>

</div>

            </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-2 h-[600px] overflow-y-scroll no-scrollbar mt-10 place-items-center'>
          <div className='h-auto w-[250px] shadow-lg rounded-xl p-2 '>
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
        

          </div>
        
        </div>

    
              
           

      
    </div>

     <div className='flex flex-col justify-center items-center w-full  py-2'>

     <ReactPaginate
  containerClassName={"pagination"}
  pageClassName={"page-item"}
  activeClassName={"active"}
  onPageChange={(event) => setPage(event.selected)}
  pageCount={Math.ceil(data.length / n)}
  breakLabel="..."
  previousLabel={
   
      <AiFillLeftCircle size={25} className='mr-2' />
   
  }
  nextLabel={
  
      <AiFillRightCircle size={25} className='ml-2' />
  
  }
/>

     </div>


    <Footer/>

    </div>

  )
}

export default index
