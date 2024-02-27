import { Inter } from 'next/font/google'
import ThemeToggle from "./components/toggleTheme"
import './components/toggleTheme.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Loic Dlugosz .',
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