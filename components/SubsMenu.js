import Image from 'next/image';
import React, { useState } from 'react';

export const SubsMenu = () => {

    const [active, setActive] = useState(0);

    const genders = ["Kadın", "Erkek", "Çocuk"];


    return (
        <>
            <div className="subCategories hidden sm:block w-[100%] pl-[36px] xxl:px-[84px] pr-[8px] 2md:pr-0">
                <div className="genders 2md:flex items-center">
                    {genders.map((gender, i) => (
                        <div key={i} className={`${
                            active == i ? 'text-white bg-red' : 'text-red'} gender flex items-center justify-center border border-solid border-red 
                            rounded-[4px] text-base font-semibold mr-0 2md:mr-[30px] w-[188px] h-[40px] cursor-pointer mb-[10px] 2md:mb-0`}
                            onClick={() => setActive(i)}
                        >
                            {gender}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-5 gap-4 mt-[38px]">
                    <div className="col-span-5 2md:col-span-3 xl:max-h-[700px] max-h-[960px] overflow-y-scroll scrollbar">
                        <div className="sub-links-wrap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-16 gap-y-12">
                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Giyim
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Elbise
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Bluz & Tunik 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Gömlek 
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Spor & Outdoor
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Sweatshirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Spor Sütyeni
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Tayt 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Eşofman
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Koşu Ayakkabısı 
                                        </a>
                                    </li>

                                    <li className="mt-[10px] text-base text-grey4 flex items-center">
                                        Daha çok 
                                        <div className="ml-[7px] relative -top-[2px]">
                                            <Image src="/images/down-a.svg" alt="down" width="6px" height="4px" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Giyim
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Elbise
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Bluz & Tunik 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Gömlek 
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Spor & Outdoor
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Sweatshirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Spor Sütyeni
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Tayt 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Eşofman
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Koşu Ayakkabısı 
                                        </a>
                                    </li>

                                    <li className="mt-[10px] text-base text-grey4 flex items-center">
                                        Daha çok 
                                        <div className="ml-[7px] relative -top-[2px]">
                                            <Image src="/images/down-a.svg" alt="down" width="6px" height="4px" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Giyim
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Elbise
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Bluz & Tunik 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Gömlek 
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Spor & Outdoor
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Sweatshirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Spor Sütyeni
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Tayt 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Eşofman
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Koşu Ayakkabısı 
                                        </a>
                                    </li>

                                    <li className="mt-[10px] text-base text-grey4 flex items-center">
                                        Daha çok 
                                        <div className="ml-[7px] relative -top-[2px]">
                                            <Image src="/images/down-a.svg" alt="down" width="6px" height="4px" />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Giyim
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Elbise
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Bluz & Tunik 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Gömlek 
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="sub-links">
                                <h6 className="text-lg font-semibold tracking-wider">
                                    Spor & Outdoor
                                </h6>

                                <ul>
                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Sweatshirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            T-shirt
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Spor Sütyeni
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Tayt 
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Eşofman
                                        </a>
                                    </li>

                                    <li className="mt-[10px]">
                                        <a href="#" className="text-base hover:underline hover:text-red">
                                            Koşu Ayakkabısı 
                                        </a>
                                    </li>

                                    <li className="mt-[10px] text-base text-grey4 flex items-center">
                                        Daha çok 
                                        <div className="ml-[7px] relative -top-[2px]">
                                            <Image src="/images/down-a.svg" alt="down" width="6px" height="4px" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="banner col-span-2 hidden 2md:block">
                        <img src="/images/banner.svg" alt="banner" />
                    </div>
                </div>
            </div>
        </>
    )
}
