
import '../../src/app/globals.css';

import 'swiper/css';  
import 'swiper/css/navigation';   
import 'swiper/css/effect-fade';

import { Inter } from 'next/font/google'

import { useContext, useEffect } from 'react';
import axios from 'axios';
import   { Context, Ecomcontext, useAppContext } from '@/context/context';
import Sidebar from './components/Sidebar';


const inter = Inter({ subsets: ['latin'] })


const getcartitemsurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getcartitemsarnxtecom'
const getwishlistitemurl = 'https://ymxx21tb7l.execute-api.ap-south-1.amazonaws.com/production/getwishlistitemsarnxtecom'

function MyApp({ Component, pageProps }) {

  function FetchCartData() {
    const { fetchcartdata, setFetchCartData, cartdata, setCartData, setWishlistItems, wishlistitems, fetchwishlist, setFetchWishlist } = useAppContext();

    

     useEffect(()=>{

      if(fetchcartdata){
         
        const getdata = async () => {
          try {
            const email = sessionStorage.getItem('email');
            const body = { Id: email };
    
            const res = await axios.post(getcartitemsurl, body);

          
            setCartData(res.data)
    
          } catch (error) {
            console.log(error);
          }
        };
    
        getdata();

      }
        setFetchCartData(false)

     },[fetchcartdata])

   
     useEffect(() => {

  
      const getdata = async () => {
        try {
          const email = sessionStorage.getItem('email');
          const body = { Id: email };
  
          const res = await axios.post(getcartitemsurl, body);
           setCartData(res.data)
         
        
  
        } catch (error) {
          console.log(error);
        }
      };
  
      getdata();
  
    }, []);


    useEffect(()=>{

      if(fetchwishlist){
         
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

      }
        setFetchWishlist(false)

     },[fetchwishlist])

    return null; 
  }


     return (

      <Context>
    <main className={inter.className}>

      <FetchCartData/>
     
      <Component {...pageProps} />
      <Sidebar/>
     
    
    </main>
    </Context>
  
  )
}

export default MyApp;