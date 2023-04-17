import { Inter } from '@next/font/google'
import Layout from '@/components/Layouts/Layout'
import Cards from '@/components/homeblog/Cards'
import _fetch from 'isomorphic-fetch'


const inter = Inter({ subsets: ['latin'] })

export default function Home (props) {
  return (
    <Layout>
        <Cards users={props.users}/>
    </Layout>
  )
}

//conexion a la api
Home.getInitialProps = async (ctx) =>{
    try {
        const res = await fetch('https://ecommerunid.sistemasdelcaribe.com/all_products');
        const data = await res.json();
        return { users: data };
      } catch (error) {
        console.error(error);
        return { users: null };
      }
  }