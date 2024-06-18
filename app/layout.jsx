'use client'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from './store/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
