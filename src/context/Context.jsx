"use client"
import React, { createContext, useContext, useState } from 'react'

 const Ecomcontext = createContext({})

  export  function Context  ({children}) {
   const [quantity, setQuantity] = useState([])
   const [subtotal, setSubTotal] = useState(0)
 
   const [fetchcartdata, setFetchCartData] = useState(false)
   const [cartdata, setCartData] = useState()
   const [wishlistitems, setWishlistItems] = useState()
   const [fetchwishlist, setFetchWishlist] = useState(false)
   const [activeComponent, setActiveComponent] = useState('Rugsupload');


  

   
  return (
     <Ecomcontext.Provider  value= { {
         cartdata,
         setCartData,
          quantity,
          setQuantity,
          subtotal,
          setSubTotal,
          fetchcartdata,
          setFetchCartData,
          wishlistitems,
          setWishlistItems,
          fetchwishlist, 
          setFetchWishlist,
          activeComponent,
          setActiveComponent,
      
        
      
      
        }}>

        {children}

     </Ecomcontext.Provider>
  )
}


  export function  useAppContext(){

   
    return useContext(Ecomcontext)

  }
