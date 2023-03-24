import { Inter } from '@next/font/google'
import LoginPage from "@/components/login_register/LoginPage";
import LayoutWithoutNav from '@/components/Layouts/LayoutWithoutNav'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
            <LayoutWithoutNav>
            <LoginPage/>
            </LayoutWithoutNav>
            )
        }