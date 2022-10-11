import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import Up from '../components/Up';


const shop = () => {
  return (
    <>
        <Header />

        <Categories />

        <div className="right-side-features fixed right-[3%] top-[40%] z-10">
          <Up />
        </div>

        <main className="bg-lwhite4 py-[15px]">
          <div className="container max-w-[100%]">
            <Breadcrumb />
            <ProductDetails />
          </div>
        </main>

        <Footer />
    </>
  )
}

export default shop;
