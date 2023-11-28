import MainMenu from '@/components/MainMenu'
import './globals.css'
import Footer from '@/components/Footer'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
