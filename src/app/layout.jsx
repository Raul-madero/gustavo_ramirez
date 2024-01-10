import {Montserrat} from 'next/font/google'
import '../sass/app.scss'
import Header from './components/Header'
import Footer from './components/Footer'

const montserrat = Montserrat({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Gustavo Ramirez',
  description: 'Contadores publicos',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
