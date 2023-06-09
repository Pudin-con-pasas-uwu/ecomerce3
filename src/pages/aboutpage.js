import { Inter } from '@next/font/google'
import Aboutustitulo from '@/components/about_us/aboutustitulo'
import Aboutlifestory from '@/components/about_us/aboutlifestory'
import Aboutimg from '@/components/about_us/aboutimg'
import Abouturphilosophy from '@/components/about_us/aboutourphilosophy'
import OurTeamTitle from '@/components/about_us/OurTeamTitle'
import OurTeam from '@/components/about_us/OurTeam'
import Layout from '@/components/Layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <Layout>
      <Aboutustitulo />
      <Aboutlifestory />
      <Aboutimg />
      <OurTeamTitle />
      <OurTeam/>
      <Abouturphilosophy />
      </Layout>
  )
}
