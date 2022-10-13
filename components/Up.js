import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Up = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {scroll ? (
                <div className="flex flex-col items-center">
                    <button className="border border-solid border-red bg-white text-white rounded-[50%] w-[40px] h-[40px] flex items-center justify-center"
                    style={{filter: 'drop-shadow(0px 4px 4px rgba(217, 7, 9, 0.23))'}}
                    onClick={scrollUp}>
                        <Image src="/images/red-down-shadow.svg" alt="down" width="8px" height="14px" className="relative top-[3px]" />
                    </button>

                    <div className="chat mt-[30px] cursor-pointer">
                        <Image src="/images/chat.svg" alt="chat" width="60px" height="60px" />
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Up;