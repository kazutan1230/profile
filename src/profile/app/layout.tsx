import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './output.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile Site',
  description: 'Profile and activities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 次のfontawesomeのリンクは変えた方が良いかも。integrityを入力した方が色々使えるかも。でもそれだと、このままgitとかにあげられない。yarnでインストールすべきかも。 */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
