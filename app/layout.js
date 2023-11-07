import { Inter } from 'next/font/google'
import ThemeToggle from "./components/toggleTheme"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loic Dlugosz Portfolio',
  description: 'My portfolio website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeToggle />
        {children}</body>
    </html>
  )
}