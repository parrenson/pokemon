import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import { monserrat } from './fonts';

export const metadata: Metadata = {
  title: 'Pokemon APP',
  description: 'PokeAPP'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialised container p-5 pb-md-5`}>
      <div className="display-1 fw-bold text-center mb-5">
        <span>Pokemon</span>
      </div>
        {children}
      </body>
    </html>
  )
}
