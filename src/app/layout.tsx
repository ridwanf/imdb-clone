import './globals.css'
import type { Metadata } from 'next'
import Head from './head'
import Header from './components/Header'
import Providers from './Providers'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'


export const metadata: Metadata = {
  description: 'This is the IMDB clone website ',
  viewport: "width=device-width, initial-scale=1"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head title='IMDB Clone'></Head>
      <body>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
