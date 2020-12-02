import Head from 'next/head'
import Link from 'next/link'
import NavBar from './NavBar'

export default function Layout({ children, home }) {
  return (
    <div className='bg-gray-100 h-screen w-screen flex flex-col'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content='Dev Explorer' />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>
      <NavBar/>
      <main className='flex-grow bg-gray-50'>{children}</main>
    </div>
  )
}
