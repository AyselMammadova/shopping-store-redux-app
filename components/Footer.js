import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="section-top py-[30px] bg-bl">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-16">
                        <div className="foot-list">
                            <h6 className="text-lg font-semibold tracking-wider">
                                Biz kimiz?
                            </h6>

                            <ul>
                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Hakkımızda 
                                        </a>
                                    </Link>
                                </li> 

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Kariyer
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            İletişim 
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Bizde Satış Yap 
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-list">
                            <h6 className="text-lg font-semibold tracking-wider">
                                Yardım
                            </h6>
                            
                            <ul>
                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Sıkça Sorulan Sorular 
                                        </a>
                                    </Link>
                                </li> 

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Canlı Yardım 
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Naslk İade Ederim  
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Nasıl Sipariş Verilir 
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-list">
                            <h6 className="text-lg font-semibold tracking-wider">
                                Kampanyalar
                            </h6>
                            
                            <ul>
                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Özel kampanyalar 
                                        </a>
                                    </Link>
                                </li> 

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Bayram kampanyaları
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            Aktif Kampanyalar 
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="#">
                                        <a className="text-sm hover:underline">
                                            VIP Üyelik
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-list">
                            <h6 className="text-lg font-semibold tracking-wider">
                                Sosyal Medya
                            </h6>
                            
                            <ul>
                                <li className="mt-[20px]">
                                    <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <a className="text-sm hover:underline flex items-center">
                                            <div className="mr-[15px] relative top-[2px]">
                                                <Image src="/images/facebook.svg" alt="facebook" width="24px" height="23.97px" />
                                            </div>
                                            Facebook
                                        </a>
                                    </Link>
                                </li> 

                                <li className="mt-[20px]">
                                    <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                        <a className="text-sm hover:underline flex items-center">
                                            <div className="mr-[15px] relative top-[2px]">
                                                <Image src="/images/instagram.svg" alt="instagram" width="24px" height="23.97px" />
                                            </div>
                                            Instagram
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
                                        <a className="text-sm hover:underline flex items-center">
                                            <div className="mr-[15px] relative top-[2px]">
                                                <Image src="/images/twitter.svg" alt="twitter" width="24px" height="23.97px" />
                                            </div>
                                            Twitter
                                        </a>
                                    </Link>
                                </li>

                                <li className="mt-[20px]">
                                    <Link href="http://www.youtube.com/" target="_blank" rel="noreferrer">
                                        <a className="text-sm hover:underline flex items-center">
                                            <div className="mr-[15px] relative top-[2px]">
                                                <Image src="/images/youtube.svg" alt="youtube" width="24px" height="23.97px" />
                                            </div>
                                            Youtube
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-list col-span-2">
                            <h6 className="text-lg font-semibold tracking-wider">
                                İndirim ve yenilikler için abone olun
                            </h6>
                            
                            <form role="form" className="mt-[20px] flex items-center">
                                <label className="block">
                                    <span className="sr-only">E-mail</span>
                                    <input 
                                        className="placeholder:text-grey1 placeholder:text-base bg-light block 
                                        text-base w-full border-solid border border-grey2 rounded-[4px]
                                        sm:w-[188px] 2xl:w-[256px] h-[50px] px-[16px] focus:outline-none" 
                                        placeholder="E-mail" type="text" name="e-mail" id="e-mail" 
                                    />
                                </label>
                                <button className="h-[50px] rounded-[4px] bg-red text-white shadow-shadow1 
                                px-[16px] text-base font-semibold ml-[9px]">
                                    Abone ol
                                </button>
                            </form>

                            <div className="note text-sm mt-[20px] w-[60%]">
                                Bültene kaydolarak Gizlilik Politikası
                                <Link href="#">
                                    <a className="underline mr-[4px] inline-block">
                                        Gizlilik Politikasını
                                    </a>
                                </Link> 
                                kabul etmiş olursunuz
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-bottom py-[14px] bg-bl2">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-16 gap-y-4 items-center">
                        <p className="text-xsm mb-0 col-span-1 lg:col-span-2 xl:col-span-1">
                            © Telif Hakkı 2022 -  testwebsite.com 
                        </p>

                        <Link href="#">
                            <a className="text-xsm">
                                Kullanım Koşulları
                            </a>
                        </Link>

                        <Link href="#">
                            <a className="text-xsm">
                                KVK ve Gizlilik Politikası
                            </a>
                        </Link>

                        <div className="foot-list xl:col-span-3">
                            <div className="flex items-center lg:justify-end">
                                <div className="lg:ml-[40px]">
                                    <Image src="/images/mastercard.svg" alt="mastercard" width="36px" height="28px" />
                                </div>
                                <div className="ml-[10px] sm:ml-[40px]">
                                    <Image src="/images/visa.svg" alt="visa" width="52px" height="16px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;