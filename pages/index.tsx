import type { NextPage } from 'next'
import Head from 'next/head'
import SliderContainer from '../components/slider'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Logo slider super feather</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='p-3'>
        <SliderContainer contentWidth={1290} />
      </main>
    </div>
  )
}

export default Home
