import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector } from "react-redux";
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
                    <Link href="/">
                        <a className="mr-auto 3xl:mr-[52px]">
                            <span className="sr-only">Your Company</span>
                            <Image src="/images/logo.svg" alt="logo" width="173px" height="36.04px" />
                        </a>
                    </Link>

                    <Link href="#">
                        <a className="hidden 2md:inline text-sm text-black hover:text-red underline ml-[8px] 3xl:ml-[41px]">
                            Mağazanı yarat
                        </a>
                    </Link>

                    <Link href="#">
                        <a className="hidden xl:inline text-sm text-black hover:text-red ml-[41px]">
                            Yardım 
                        </a>
                    </Link>

                    <div className="hidden xl:flex drop-lang items-center mx-[20px] 2xl:mx-[76px] cursor-pointer">
                        <div className="flex items-center">
                            <Image src="/images/tr.svg" alt="tr" width="19px" height="14px" />
                            <div className="ml-[7px] mr-[10px]">
                                İstanbul  
                                <span className="text-grey relative -top-[1px] mx-[7px]">|</span>  
                                TR  
                                <span className="text-grey relative -top-[1px] mx-[7px]">|</span>
                                TRY
                            </div>
                        </div>
                        <Image src="/images/down.svg" alt="down-arrow" width="4px" height="6px" />
                    </div>

                    <form role="form" className="hidden 2md:block relative mx-[20px] 2xl:mr-[46px]">
                        <label className="relative block">
                            <span className="sr-only">Search</span>
                            <span className="absolute top-[50%] -translate-y-2/4 left-0 flex items-center pl-[14px]">
                                <Image src="/images/search.svg" alt="search" width="19.77px" height="19.77px" />
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
                    
                    <Link href="#">
                        <a className="flex flex-col justify-center items-center text-sm text-black hover:text-red ml-[20px] 2xl:ml-[50px]">
                            <Image src="/images/order.svg" alt="orders" width="22px" height="22px" />
                            <span className="hidden ssm:inline ssm:mt-[8px]">Siparişlerim</span>
                        </a>
                    </Link>

                    <Link href="#">
                        <a className="flex flex-col justify-center items-center text-sm text-black hover:text-red ml-[20px] 2xl:ml-[50px]">
                            <Image src="/images/fav.svg" alt="fav" width="22px" height="20px" />
                            <span className="hidden ssm:inline ssm:mt-[8px]">Favorilerim</span>
                        </a>
                    </Link>
                    
                    <div className="cart-drop">
                        <div className="flex flex-col justify-center items-center text-sm text-black hover:text-red ml-[20px] 2xl:ml-[50px] cursor-pointer"
                        type="button" onClick={handleOpen}
                        >
                            <div className="relative">
                                <Image src="/images/cart.svg" alt="cart" width="17px" height="20px" />
                                <span className="absolute -top-[2px] -right-[17px] rounded-[50%] bg-red w-[16px] h-[16px] text-xsm text-white flex items-center justify-center">
                                    {cartTotalQuantity}
                                </span>
                            </div>
                            <span className="hidden ssm:inline ssm:mt-[8px]">Sepetim</span>
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