import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Charles Design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container px-5 flex flex-col  mx-auto pt-16  xl:flex-row'>
        <div className='flex flex-col w-full text-center'>
            Hello World
        </div>
      </main>
    </div>
  )
}