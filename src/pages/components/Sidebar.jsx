
import { useAppContext } from '@/context/Context'
import { ChartColumn, ListOrdered, ShoppingBasket, TableOfContents, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Sidebar = () => {

    const [productisopen, setProductIsOpen] = useState(false)
    const [contentisopen, setContentIsOpen] = useState(false)
    const [furnitureopen, setFurnitureOpen] = useState(false)
    const {activeComponent, setActiveComponent} = useAppContext()

    const handleshowproduct = ()=>{
        setProductIsOpen(!productisopen)
    }
    const handleshowcontent = ()=>{
        setContentIsOpen(!contentisopen)
    }
    const handleshowfurniture=()=>{
      setFurnitureOpen(!furnitureopen)
    }
  console.log(activeComponent)
  

  return (
    <div className='fixed left-0 w-[200px] z-30 h-screen bg-gray-200'>
        <ul className='flex flex-col w-full justify-start items-start gap-2 mt-5'>
            <div>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer' onClick={handleshowproduct}><ShoppingBasket /><p>Products</p></li>
               {
               
               <ul 
               className={`flex flex-col ml-10 gap-2  transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                 productisopen ? 'max-h-40 scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
               }`}
             >
                <li><p className='text-sm'>Collections</p></li>
                <li><p  className='text-sm'>Inventory</p></li>
                <li><p  className='text-sm'>Purchase order</p></li>
                <li><p  className='text-sm'>Transfers</p></li>
               

             </ul> 
               }
               
            

            </div>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer'><ListOrdered /><p>Orders</p></li>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer'><User /><p>Customers</p></li>
            <li className='flex flex-row gap-2 ml-2 cursor-pointer'><ChartColumn /><p>Analytics</p></li>
              <div>
              <li className='flex flex-row gap-2 ml-2 cursor-pointer' onClick={handleshowcontent}><TableOfContents /><p>Content</p></li>
            
              <ul 
               className={`flex flex-col ml-10 gap-2 mt-2 transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                 contentisopen ? 'max-h-full scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
               }`}
             >
                  <li><p className='text-sm cursor-pointer'>Rugs upload</p></li>
                  <li><p  className='text-sm cursor-pointer'>Wallpaper upload</p></li>
                  <li><p  className='text-sm cursor-pointer' onClick={handleshowfurniture}>Furniture upload</p>
                  {
               
               <ul 
               className={`flex flex-col ml-5 gap-1  transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                 furnitureopen ? 'max-h-full scale-y-100 opacity-100' : 'max-h-0 scale-y-0 opacity-0'
               }`}
             >
                <li><p className='text-xs cursor-pointer' onClick={()=> setActiveComponent('Sofa')}>Sofa</p></li>
                <li><p  className='text-xs cursor-pointer' onClick={()=> setActiveComponent('Chair')}>Chair</p></li>
                <li><p  className='text-xs cursor-pointer' onClick={()=> setActiveComponent('Wardrobe')}>Wardrobe</p></li>
             
               

             </ul> 
               }
                  
                  </li>
                  <li><p  className='text-sm cursor-pointer'>Electical upload</p></li>
                  <li><p  className='text-sm cursor-pointer'>Electronics upload</p></li>

                 

               </ul>
              </div>

             

        </ul>

    </div>
  )
}

export default Sidebar