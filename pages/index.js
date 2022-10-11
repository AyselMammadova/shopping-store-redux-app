import Head from 'next/head'
import Breadcrumb from '../components/Breadcrumb';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Up from '../components/Up';


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

      <ToastContainer />

      <div className="right-side-features fixed right-[3%] top-[40%] z-10">
        <Up />
      </div>

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
