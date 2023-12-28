import {Montserrat} from 'next/font/google'
import '../sass/app.scss'

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
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
