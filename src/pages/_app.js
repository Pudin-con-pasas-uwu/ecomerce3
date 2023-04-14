// seccion de css
import '@/styles/globals.css'
import '@/styles/inicio.css'
import '@/styles/About.css'
import '@/styles/AboutOurTeam.css'
import '@/styles/Login&Register.css'
import '@/styles/ContactUs.css'
import '@/styles/pagos.css'
import '@/styles/Productos.css'
import '@/styles/menuCategory.css'


import { Montserrat } from 'next/font/google'
import { StoreProvider } from 'utils/Store'


const montserrat = Montserrat({
  weight:['400'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }) {
  return(
      
    <StoreProvider>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </StoreProvider>

  ) 
}
