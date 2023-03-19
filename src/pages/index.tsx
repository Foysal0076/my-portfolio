import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Foysal | React, Next.js Developer</title>
        <meta
          name='description'
          content='Say Hi from Foysal Ahmed, React and Next.js Developer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-center'>Foy&apos;s Portfolio</h1>
      </main>
    </>
  )
}
