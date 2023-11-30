import MainMenu from '@/components/MainMenu';
import './globals.css';
import Footer from '@/components/Footer';


export async function generateMetadata(){
  const res=await fetch(process.env.BASE_URL+"api/SiteMeta/Home");
  const data=await res.json();
  return{
      title:data[0]['title'],
      description:data[0]['description'],
      keywords:data[0]['keywords'],
      openGraph: {
          images: data[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        
        <MainMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
