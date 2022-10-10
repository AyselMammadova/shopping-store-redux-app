import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tabs from '../components/Tabs';


export default function Home() {
  return (
    <>
      <Head>
        <title>Shopping Store Redux App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Categories />

      <main className="bg-lwhite4 py-[15px]">
        <div className="container max-w-[100%]">
          <Breadcrumb />
          <Tabs />
        </div>
      </main>

      <Footer />
    
    </>
  )
}
