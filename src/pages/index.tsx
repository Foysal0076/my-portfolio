import HomeBlock from '@/components/Home'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Mosharrof | UI/UX Designer</title>
        <meta
          name='description'
          content='Say Hi from Mosharrof, UI/UX Designer'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <HomeBlock />
      </main>
    </>
  )
}

export default Home
