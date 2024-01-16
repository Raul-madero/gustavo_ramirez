'use client'
import '../sass/app.scss'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import { Provider } from 'react-redux'
import store from '@/lib/store'



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
