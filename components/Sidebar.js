import React, { useState } from 'react';


const Sidebar = () => {

    const cats = [
        {id: 1, name: 'Kazak', count: '3'},
        {id: 2, name: 'Pantolon', count: '41'},
        {id: 3, name: 'Jean', count: '32'},
        {id: 4, name: 'Kaban', count: '17'},
        {id: 5, name: 'T-Shirt', count: '19'},
        {id: 6, name: 'Elbise', count: '1'},
        {id: 7, name: 'Lorem', count: '4'},
        {id: 8, name: 'Lorem2', count: '3'}
    ]

    const genders = [
        {id: 1, name: 'Kadın', count: '3'},
        {id: 2, name: 'Erkek', count: '41'},
        {id: 3, name: 'Çocuk', count: '32'}
    ]

    const sizes = [
        {id: 1, name: 'XS', count: '3'},
        {id: 2, name: 'S', count: '41'},
        {id: 3, name: 'M', count: '32'},
        {id: 4, name: 'L', count: '17'},
        {id: 5, name: 'Xl', count: '19'},
        {id: 6, name: 'XXL', count: '1'}
    ]

    const ages = [
        {id: 1, name: '3-6 AY', count: '3'},
        {id: 2, name: '6-9 AY', count: '41'},
        {id: 3, name: '9-12 AY', count: '32'},
        {id: 4, name: '18-24 AY', count: '17'},
        {id: 5, name: '2-3 Yaş', count: '19'},
        {id: 6, name: 'c', count: '1'},
        {id: 7, name: 'Lorem', count: '4'},
        {id: 8, name: 'Lorem2', count: '3'}
    ]

    const colors = [
        {id: 1, name: 'Beyaz', code: '#fff'},
        {id: 2, name: 'Bej', code: '#EDE9DE'},
        {id: 3, name: 'Mor', code: '#8331CC'},
        {id: 4, name: 'Mavi', code: '#71B2FF'},
        {id: 5, name: 'Yeşil', code: '#7ED321'},
        {id: 6, name: 'Kırmızı', code: '#DE001B'},
        {id: 7, name: 'Sarı', code: '#FFE500'},
        {id: 8, name: 'Kahverengi', code: '#8B572A'},
        {id: 9, name: 'Pembe', code: '#FFA8E7'},
        {id: 10, name: 'Turuncu', code: '#FFA500'},
        {id: 11, name: 'Siyah', code: '#000'}
    ]

    const prices = [
        {id: 1, name: '0 TL - 20 TL'},
        {id: 2, name: '20 TL - 30 TL'},
        {id: 3, name: '30 TL - 50 TL'},
        {id: 4, name: '50 TL - 70 TL'},
        {id: 5, name: '70 TL - 125 TL'},
        {id: 6, name: '125 TL - 400 TL'}
    ]


    return (
        <aside>
            <div className="filter-wrap pb-[20px] border-b border-b-solid border-b-bord1">
                <div className="flex items-center justify-between text-red text-base font-semibold mb-[20px] cursor-pointer">
                    İlgili Kategoriler
                    <img src="/images/red-down.svg" alt="down" />
                </div>
                <div className="filter-items max-h-[184px] overflow-y-scroll scrollbar pr-[20px]">
                    {cats.map((cat) => (
                        <div key={cat.id} className="mb-[15px] last:mb-0 filter-item text-sm flex items-center justify-between">
                            <span className="text-black">
                                {cat.name}
                            </span>
                            <span className="text-tx1">
                                {cat.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-wrap py-[20px] border-b border-b-solid border-b-bord1">
                <div className="flex items-center justify-between text-red text-base font-semibold mb-[20px] cursor-pointer">
                    Cinsiyet
                    <img src="/images/red-down.svg" alt="down" />
                </div>
                <div className="filter-items max-h-[190px] pr-[20px]">
                    {genders.map((gender) => (
                        <div key={gender.id} className="mb-[15px] last:mb-0 filter-item text-sm flex items-center justify-between">
                            <label className="custom-check block relative cursor-pointer pl-[38px]">
                                <span className="text-black relative top-[2px]">{gender.name}</span>
                                <input className="absolute opacity-0 w-0 h-0"
                                type="checkbox" />
                                <span className="checkmark absolute left-0 top-0 rounded-[8px] bg-white border-2 border-solid border-bord1 w-[24px] h-[24px]"></span>
                            </label>
                            
                            <span className="text-tx1 relative top-[2px]">
                                {gender.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-wrap py-[20px] border-b border-b-solid border-b-bord1">
                <div className="flex items-center justify-between text-red text-base font-semibold mb-[20px] cursor-pointer">
                    Beden
                    <img src="/images/red-down.svg" alt="down" />
                </div>
                <div className="filter-items max-h-[190px] pr-[20px]">
                    {sizes.map((size) => (
                        <div key={size.id} className="mb-[15px] last:mb-0 filter-item text-sm flex items-center justify-between">
                            <label className="custom-check block relative cursor-pointer pl-[38px]">
                                <span className="text-black relative top-[2px]">{size.name}</span>
                                <input className="absolute opacity-0 w-0 h-0"
                                type="checkbox" />
                                <span className="checkmark absolute left-0 top-0 rounded-[8px] bg-white border-2 border-solid border-bord1 w-[24px] h-[24px]"></span>
                            </label>
                            
                            <span className="text-tx1 relative top-[2px]">
                                {size.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-wrap py-[20px] border-b border-b-solid border-b-bord1">
                <div className="flex items-center justify-between text-red text-base font-semibold mb-[20px] cursor-pointer">
                    Yaş oranı
                    <img src="/images/red-down.svg" alt="down" />
                </div>
                <div className="filter-items max-h-[190px] overflow-y-scroll scrollbar pr-[20px]">
                    {ages.map((age) => (
                        <div key={age.id} className="mb-[15px] last:mb-0 filter-item text-sm flex items-center justify-between">
                            <label className="custom-check block relative cursor-pointer pl-[38px]">
                                <span className="text-black relative top-[2px]">{age.name}</span>
                                <input className="absolute opacity-0 w-0 h-0"
                                type="checkbox" />
                                <span className="checkmark absolute left-0 top-0 rounded-[8px] bg-white border-2 border-solid border-bord1 w-[24px] h-[24px]"></span>
                            </label>
                            
                            <span className="text-tx1 relative top-[2px]">
                                {age.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="filter-wrap py-[20px] border-b border-b-solid border-b-bord1">
                <div className="flex items-center justify-between text-red text-base font-semibold mb-[20px] cursor-pointer">
                    Renk
                    <img src="/images/red-down.svg" alt="down" />
                </div>
                <div className="filter-items max-h-[294px] overflow-y-scroll scrollbar pr-[20px]">
                    {colors.map((color) => (
                        <div key={color.id} className="mb-[15px] last:mb-0 filter-item text-sm flex items-center justify-between">
                            <label className="custom-check block relative cursor-pointer pl-[38px]">
                                <span className="text-black relative top-[9px]">{color.name}</span>
                                <input className="absolute opacity-0 w-0 h-0"
                                type="checkbox" />
                                <span style={{ background: color.code }}
                                className="checkmark checkmark-color m-[5px] absolute left-0 top-0 rounded-[8px] bg-white border-2 border-solid border-bord1 w-[24px] h-[24px]"></span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="filter-wrap py-[20px] border-b border-b-solid border-b-bord1">
                <div className="flex items-center justify-between text-red text-base font-semibold mb-[20px] cursor-pointer">
                    Fiyat Aralığı
                    <img src="/images/red-down.svg" alt="down" />
                </div>
                <form role="form" className="mb-[30px] price-search flex items-end flex-wrap">
                    <div className="flex items-end mr-[7px]">
                        <label className="text-grey5 text-sm">
                            Min TL
                            <input type="number" name="min" min="0" placeholder="0" className="appearance-none mt-[6px] block focus:outline-none 
                            w-[84px] h-[40px] p-[10px] text-black border border-solid border-bord1 rounded-[4px]" />
                        </label>
                        
                        <div className="divide px-[4px] text-black h-[40px] flex items-center">
                            <span>-</span>
                        </div>

                        <label className="text-grey5 text-sm">
                            Max TL
                            <input type="number" name="max" min="0" placeholder="0" className="appearance-none mt-[6px] block focus:outline-none 
                            w-[84px] h-[40px] p-[10px] text-black border border-solid border-bord1 rounded-[4px]" />
                        </label>
                    </div>

                    <button className="rounded-[4px] bg-red w-[68px] h-[40px] flex items-center justify-center">
                        <img src="/images/w-search.svg" alt="search" />
                    </button>
                    
                </form>
                <div className="filter-items max-h-[190px] pr-[20px]">
                    {prices.map((price) => (
                        <div key={price.id} className="mb-[15px] last:mb-0 filter-item text-sm flex items-center justify-between">
                            <label className="custom-check block relative cursor-pointer pl-[38px]">
                                <span className="text-black relative top-[2px]">{price.name}</span>
                                <input className="absolute opacity-0 w-0 h-0"
                                type="checkbox" />
                                <span className="checkmark absolute left-0 top-0 rounded-[8px] bg-white border-2 border-solid border-bord1 w-[24px] h-[24px]"></span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;
