import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
import Carrito from '@/components/Carrito'


const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <Carrito/>
    </Layout>
  )
}