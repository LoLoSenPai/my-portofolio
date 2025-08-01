import ThemeToggle from "./components/toggleTheme"
import './components/toggleTheme.css'
import './globals.css'
import Head from 'next/head';

export const metadata = {
  title: 'Portfolio',
  description: 'Loic Dlugosz Portfolio.',
  icon: '/favicon.ico',
  apple: '/apple-touch-icon.png',
  shortcut: '/apple-touch-icon.png',
  openGraph: {
    title: 'Portfolio',
    description: 'Loic Dlugosz Portfolio.',
    image: '/apple-touch-icon.png',
    url: 'https://lololabs.vercel.app/',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>
      <body className=''>
        <ThemeToggle />
        {children}</body>
    </html>
  )
}