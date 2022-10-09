import React, { useState } from 'react';

const SubCategories = () => {

    const [active, setActive] = useState(0);

    const genders = ["Kadın", "Erkek", "Çocuk"];

    const subCategories = [
        "Ayakkabi & Çanta", "Saat & Aksesuar",
        "Kozmetik Ev & Yaşam", "Spor & Outdoor",
        "Kitap & Hobi", "Oto & Bahçe", "Elektronik"
    ]

    const additions = [
        "Süpermarket", "Süper Fırsatlar", "Kampanyalar",
        "Indirimler", "Blog", "Markalar"
    ]

    return (
        <>
            <ul className="flex items-center justify-between">
                {genders.map((gender, i) => (

                    <li key={i} onClick={() => setActive(i)} className="list-none hidden md:block">
                        <a
                            href="#"
                            className={`${
                            active == i ? 'text-red' : 'text-bl3'} 
                            py-[18px] text-sm 3xl:text-base font-semibold tracking-sl`}
                        >
                            {gender}
                        </a>
                    </li>
                ))}

                {subCategories.map((category, i) => (

                    <li key={i} onClick={() => setActive(i)} className="list-none hidden xxl:block">
                        <a
                            href="#"
                            className={`${
                            active == i ? 'text-red' : 'text-bl3'} 
                            py-[18px] text-sm 3xl:text-base font-semibold tracking-sl`}
                        >
                            {category}
                        </a>
                    </li>
                ))}

                {additions.map((addition, i) => (

                    <li key={i} onClick={() => setActive(i)} className="list-none">
                        <a
                            href="#"
                            className={`${
                            active == i ? 'text-red' : 'text-bl3'} 
                            py-[18px] text-sm 3xl:text-base font-semibold tracking-sl`}
                        >
                            {addition}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SubCategories;
