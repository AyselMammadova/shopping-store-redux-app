import React, { useState } from 'react';
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic';
const  Cart = dynamic(() => import('./Cart'), { ssr: false })


const Header = () => {

    const { cartTotalQuantity } = useSelector((state) => state.cart);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <header className="fixed top-0 left-0 w-[100%] h-[90px] z-20 bg-white shadow-shadow3 flex items-center">
            <div className="px-[20px] ssm:px-[34px] py-[20px] w-[100%]">
                <div className="flex items-center">
                    <a href="/" className="mr-auto 3xl:mr-[52px]">
                        <span className="sr-only">Your Company</span>
                        <img src="/images/logo.svg" alt="logo" className="w-[120px] ssm:w-auto" />
                    </a>

                    <a href="#" className="hidden 2md:inline text-sm text-black hover:text-red underline ml-[8px] 3xl:ml-[41px]">
                        Mağazanı yarat
                    </a>

                    <a href="#" className="hidden xl:inline text-sm text-black hover:text-red ml-[41px]">
                        Yardım 
                    </a>

                    <div className="hidden xl:flex drop-lang items-center mx-[20px] 2xl:mx-[76px] cursor-pointer">
                        <div className="flex items-center">
                            <img src="/images/tr.svg" alt="tr" className="mr-[7px]" />
                            <div>
                                İstanbul  
                                <span className="text-grey relative -top-[1px] mx-[7px]">|</span>  
                                TR  
                                <span className="text-grey relative -top-[1px] mx-[7px]">|</span>
                                TRY
                            </div>
                        </div>
                        <img src="/images/down.svg" alt="down-arrow" className="ml-[10px]" />
                    </div>

                    <form role="form" className="hidden 2md:block relative mx-[20px] 2xl:mr-[46px]">
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute top-[50%] -translate-y-2/4 left-0 flex items-center pl-[14px]">
                                <img src="/images/search.svg" alt="search" />
                            </span>
                            <input 
                                className="placeholder:text-grey1 placeholder:text-base bg-light block 
                                text-base w-full border-solid border border-grey2 rounded-[36px]
                                3xl:w-[610px] h-[50px] pl-[48px] pr-[120px] focus:outline-none" 
                                placeholder="Aradığınız herşey burada" type="text" name="search" id="search" 
                            />
                        </label>
                        <button className="absolute right-[9px] h-[34px] rounded-[36px] 
                        bg-red text-white shadow-shadow1 px-[16px] top-[50%] -translate-y-2/4
                        text-base font-semibold">
                            Arama yap
                        </button>
                    </form>
                    
                    <a href="#" className="flex flex-col justify-center items-center text-sm text-black hover:text-red ml-[20px] 2xl:ml-[50px]">
                        <img src="/images/order.svg" alt="orders" className="ssm:mb-[8px]" />
                        <span className="hidden ssm:inline">Siparişlerim</span>
                    </a>

                    <a href="#" className="flex flex-col justify-center items-center text-sm text-black hover:text-red ml-[20px] 2xl:ml-[50px]">
                        <img src="/images/fav.svg" alt="fav" className="ssm:mb-[8px]" />
                        <span className="hidden ssm:inline">Favorilerim</span>
                    </a>
                    
                    <div className="cart-drop">
                        <div className="flex flex-col justify-center items-center text-sm text-black hover:text-red ml-[20px] 2xl:ml-[50px] cursor-pointer"
                        type="button" onClick={handleOpen}
                        >
                            <div className="relative">
                                <img src="/images/cart.svg" alt="cart" className="ssm:mb-[8px]" />
                                <span className="absolute -top-[2px] -right-[17px] rounded-[50%] bg-red w-[16px] h-[16px] text-xsm text-white flex items-center justify-center">
                                    {cartTotalQuantity}
                                </span>
                            </div>
                            <span className="hidden ssm:inline">Sepetim</span>
                        </div>
                        
                        <div className={`${open ? 'block' : 'hidden'} fixed right-0 top-[90px] z-20 w-[100%] ssm:w-[400px] h-[100vh]`}>
                            <Cart close={handleOpen} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;