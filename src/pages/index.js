import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
// import Inicio from '@/components/homeblog/inicio'
import Space from '@/components/homeblog/space'
import Carrousel from '@/components/homeblog/carrousel'



const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      {/* <Inicio/> */}
      <Carrousel/>
      <Space/>
    </Layout>
  )
}