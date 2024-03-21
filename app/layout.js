import { Inter } from 'next/font/google'
import ThemeToggle from "./components/toggleTheme"
import './components/toggleTheme.css'
import './globals.css'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Loic Dlugosz Portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <body className={inter.className}>
        <ThemeToggle />
        {children}</body>
    </html>
  )
}