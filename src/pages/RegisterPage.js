import { Inter } from '@next/font/google'
import RegisterPage from "@/components/login_register/RegisterPage";
import LayoutWithoutNav from '@/components/Layouts/LayoutWithoutNav'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <LayoutWithoutNav>
            <RegisterPage/>
            </LayoutWithoutNav>
            )
        }