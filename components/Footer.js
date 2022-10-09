import React from 'react'

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
                                    <a href="#" className="text-sm hover:underline">
                                        Hakkımızda 
                                    </a>
                                </li> 

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Kariyer
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        İletişim 
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Bizde Satış Yap 
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-list">
                            <h6 className="text-lg font-semibold tracking-wider">
                                Yardım
                            </h6>
                            
                            <ul>
                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Sıkça Sorulan Sorular 
                                    </a>
                                </li> 

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Canlı Yardım 
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Naslk İade Ederim  
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Nasıl Sipariş Verilir 
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-list">
                            <h6 className="text-lg font-semibold tracking-wider">
                                Kampanyalar
                            </h6>
                            
                            <ul>
                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Özel kampanyalar 
                                    </a>
                                </li> 

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Bayram kampanyaları
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        Aktif Kampanyalar 
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="#" className="text-sm hover:underline">
                                        VIP Üyelik
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="foot-list">
                            <h6 className="text-lg font-semibold tracking-wider">
                                Sosyal Medya
                            </h6>
                            
                            <ul>
                                <li className="mt-[20px]">
                                    <a href="https://www.facebook.com/" className="text-sm hover:underline flex items-center" target="_blank">
                                        <img src="/images/facebook.svg" alt="facebook" className="mr-[15px]" />
                                        Facebook 
                                    </a>
                                </li> 

                                <li className="mt-[20px]">
                                    <a href="https://www.instagram.com/" className="text-sm hover:underline flex items-center" target="_blank">
                                        <img src="/images/instagram.svg" alt="instagram" className="mr-[15px]" />
                                        Instagram
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="https://twitter.com/" className="text-sm hover:underline flex items-center" target="_blank">
                                        <img src="/images/twitter.svg" alt="twitter" className="mr-[15px]" />
                                        Twitter 
                                    </a>
                                </li>

                                <li className="mt-[20px]">
                                    <a href="http://www.youtube.com/" className="text-sm hover:underline flex items-center" target="_blank">
                                        <img src="/images/youtube.svg" alt="youtube" className="mr-[15px]" />
                                        Youtube
                                    </a>
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
                                <a href="#" className="underline mr-[4px] inline-block">Gizlilik Politikasını</a> 
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

                        <a href="#" className="text-xsm">
                            Kullanım Koşulları
                        </a>

                        <a href="#" className="text-xsm">
                            KVK ve Gizlilik Politikası
                        </a>

                        <div className="foot-list xl:col-span-3">
                            <div className="flex items-center lg:justify-end">
                                <img src="/images/mastercard.svg" alt="mastercard" className="lg:ml-[40px]" />
                                <img src="/images/visa.svg" alt="visa" className="ml-[10px] sm:ml-[40px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;