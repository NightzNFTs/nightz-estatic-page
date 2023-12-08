import { Inter } from 'next/font/google'
import './globals.css'
// import Header  from '../components/Header.js'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const adriana = localFont({
  src: './adriana.woff2',
  display: 'swap',
})

export const metadata = {
  title: 'New Nightz Are Coming',
  description: 'Just days away from redefining the tourism, NFT and RWA industries.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={adriana.className}>
        <div className=''>
          {children}
        </div>
      </body>
    </html>
  )
}
