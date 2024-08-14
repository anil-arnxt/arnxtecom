import '../../src/app/globals.css';

import 'swiper/css';  
import 'swiper/css/navigation';   
import 'swiper/css/effect-fade';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {

     return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp;