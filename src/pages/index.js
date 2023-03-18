import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
import Inicio from '@/components/homeblog/inicio'
import Space from '@/components/homeblog/space'



const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <Inicio/>
      <Space/>
    </Layout>
  )
}