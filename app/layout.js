import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='light'>
      <body className={inter.className}>
        <Navbar />
        <main className='px-8 py-20 max-w-6xl mx-auto'>{children}</main>
      </body>
    </html>
  )
}
