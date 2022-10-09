import React, { useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import styles from '../styles/Categories.module.css'
import { SubsMenu } from './SubsMenu';

const BaseCategories = () => {

    const [open, setOpen] = useState(false);

    const categories = [
        { href: '#moda', name: 'Moda', icon: 'tshirt.svg' },
        { href: '#kozmetik', name: 'Kozmetik', icon: 'kozmetik.svg' },
        { href: '#spor', name: 'Spor ve Outdoor', icon: 'shoe.svg' },
        { href: '#bakim', name: 'Kişisel bakım', icon: 'bakim.svg' },
        { href: '#mutfak', name: 'Mutfak', icon: 'mutfak.svg' },
        { href: '#oyuncak', name: 'Oyuncak', icon: 'oyuncak.svg' },
        { href: '#kitap', name: 'Kitap', icon: 'kitap.svg' },
        { href: '#ev', name: 'Ev ve Yaşam', icon: 'ev.svg' },
        { href: '#elektronik', name: 'Elektronik', icon: 'elektronik.svg' },
        { href: '#arac', name: 'Araç', icon: 'arac.svg' }
    ]

    return (
        <>
            <Menu>
                {({ open }) => (
                <>
                    <Menu.Button className={`${styles.menuIcon} overflow-hidden w-[36px] h-[36px] bg-white border-solid border 
                    border-lwhite rounded-[4px] shadow-shadow2 focus:outline-none flex flex-col justify-center items-center
                    ${open ? styles.openedMenu : ''}`} type="button" onClick={() => setOpen(!open)}>
                        <span className="relative block w-[16px] h-[1.6px] bg-red rounded-[4px]"></span>
                    </Menu.Button>

                    <Transition
                        className="absolute z-10 w-[100%]"
                        show={open}
                        enter="transition duration-50 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-25 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <div className="mt-[10px] flex bg-white">
                            <Menu.Items static 
                            className="bg-lwhite2 shadow-shadow4 rounded-[8px] py-[30px] px-[15px] w-[100%] ssm:w-[390px]">
                                {categories.map((category, i) => (

                                    <Menu.Item key={category.href} as={Fragment}>
                                        {({ active }) => (
                                        <a
                                            href={category.href}
                                            className={`${
                                            active == i ? 'text-red bg-lred' : 'text-black'} 
                                            flex items-center px-[10px] ssm:px-[20px] py-[18px] text-base font-semibold rounded-[4px]`}
                                        >
                                            <div className="img-wrap min-w-[30px] mr-[10px] ssm:mr-[46px]">
                                                <img src={`/images/${category.icon}`} alt={category.name} />
                                            </div>

                                            {category.name}
                                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                                                <path d="M7.78279 6.45372L1.72295 0.223657C1.5828 0.0794465 1.3957 0 1.1962 0C0.996706 0 0.809609 0.0794465 0.669453 0.223657L0.223188 0.682352C-0.0671998 0.981244 -0.0671998 1.46703 0.223188 1.76547L5.31178 6.9971L0.217542 12.2345C0.0773851 12.3787 0 12.571 0 12.776C0 12.9812 0.0773851 13.1734 0.217542 13.3178L0.663807 13.7763C0.804074 13.9206 0.99106 14 1.19056 14C1.39005 14 1.57715 13.9206 1.71731 13.7763L7.78279 7.54059C7.92328 7.39592 8.00044 7.20277 8 6.99744C8.00044 6.79131 7.92328 6.59827 7.78279 6.45372Z" 
                                                fill={`${active == i ? '#FF0000' : '#686777'}`}/>
                                            </svg>
                                        </a>
                                        )}
                                    </Menu.Item>
                                ))}

                                <div className="mobile-menu border border-solid border-grey xl:border-transparent">
                                    <a
                                        href="#"
                                        className="text-black flex 2md:hidden items-center px-[10px] ssm:px-[20px] py-[18px] text-base 
                                        font-semibold rounded-[4px]"
                                    >
                                        Mağazanı yarat
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                                            <path d="M7.78279 6.45372L1.72295 0.223657C1.5828 0.0794465 1.3957 0 1.1962 0C0.996706 0 0.809609 0.0794465 0.669453 0.223657L0.223188 0.682352C-0.0671998 0.981244 -0.0671998 1.46703 0.223188 1.76547L5.31178 6.9971L0.217542 12.2345C0.0773851 12.3787 0 12.571 0 12.776C0 12.9812 0.0773851 13.1734 0.217542 13.3178L0.663807 13.7763C0.804074 13.9206 0.99106 14 1.19056 14C1.39005 14 1.57715 13.9206 1.71731 13.7763L7.78279 7.54059C7.92328 7.39592 8.00044 7.20277 8 6.99744C8.00044 6.79131 7.92328 6.59827 7.78279 6.45372Z" 
                                            fill="#686777"/>
                                        </svg>
                                    </a>

                                    <a
                                        href="#"
                                        className="text-black flex xl:hidden items-center px-[10px] ssm:px-[20px] py-[18px] text-base 
                                        font-semibold rounded-[4px]"
                                    >
                                        Yardım 
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                                            <path d="M7.78279 6.45372L1.72295 0.223657C1.5828 0.0794465 1.3957 0 1.1962 0C0.996706 0 0.809609 0.0794465 0.669453 0.223657L0.223188 0.682352C-0.0671998 0.981244 -0.0671998 1.46703 0.223188 1.76547L5.31178 6.9971L0.217542 12.2345C0.0773851 12.3787 0 12.571 0 12.776C0 12.9812 0.0773851 13.1734 0.217542 13.3178L0.663807 13.7763C0.804074 13.9206 0.99106 14 1.19056 14C1.39005 14 1.57715 13.9206 1.71731 13.7763L7.78279 7.54059C7.92328 7.39592 8.00044 7.20277 8 6.99744C8.00044 6.79131 7.92328 6.59827 7.78279 6.45372Z" 
                                            fill="#686777"/>
                                        </svg>
                                    </a>

                                    <div className="px-[10px] ssm:px-[20px] py-[18px] block xl:hidden ">
                                        <div className="flex drop-lang items-center cursor-pointer">
                                            <div className="flex items-center">
                                                <img src="/images/tr.svg" alt="tr" className="mr-[7px]" />
                                                <div>
                                                    İstanbul  
                                                    <span className="text-grey relative -top-px mx-[7px]">|</span>  
                                                    TR  
                                                    <span className="text-grey relative -top-px mx-[7px]">|</span>
                                                    TRY
                                                </div>
                                            </div>
                                            <img src="/images/down.svg" alt="down-arrow" className="ml-[10px]" />
                                        </div>
                                    </div>

                                    <div className="px-[10px] ssm:px-[20px] py-[18px] block 2md:hidden">
                                        <form role="form" className="relative">
                                            <label className="relative block mb-[10px] ssm:mb-0">
                                                <span className="sr-only">Search</span>
                                                <span className="absolute top-[50%] -translate-y-2/4 left-0 flex items-center pl-[14px]">
                                                    <img src="/images/search.svg" alt="search" />
                                                </span>
                                                <input 
                                                    className="placeholder:text-grey1 placeholder:text-base bg-light block 
                                                    text-base w-full border-solid border border-grey2 rounded-[36px]
                                                    w-[100%] h-[50px] pl-[48px] pr-[120px] focus:outline-none" 
                                                    type="text" name="search" id="search" 
                                                />
                                            </label>
                                            <button className="w-[100%] ssm:w-[auto] ssm:absolute right-[9px] h-[34px] rounded-[36px] 
                                            bg-red text-white shadow-shadow1 px-[16px] top-[50%] ssm:-translate-y-2/4
                                            text-base font-semibold">
                                                Arama yap
                                            </button>
                                        </form>
                                    </div>
                                </div>            
                            </Menu.Items>

                            <SubsMenu />

                        </div>
                    </Transition>
                </>
                )}
            </Menu>  
        </>
    )
}

export default BaseCategories;
