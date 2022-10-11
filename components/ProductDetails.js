import React, { useState } from 'react';
import Select from 'react-select';

const ProductDetails = () => {

    //select
    const sizes = [
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
        { value: 'L', label: 'L' },
        { value: 'XL', label: 'XL' }
    ]

    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: "6px",
            border: "1px solid #E6E6E6",
            boxShadow: "none",
            background: '#FAF9F9',
            fontSize: '16px',
            lineHeight: '20px',
            cursor: 'pointer',
            height: '50px',
            "&:hover": {
                border: "1px solid #E6E6E6",
                boxShadow: "none"
            }
        }),
        placeholder: (base, state) => ({
            ...base,
            color: '#A6A6A6'
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: '#53535380'
        }),
        option: (base, state) => ({
            ...base,
            color: "#000",
            backgroundColor: state.isSelected ? "#FAF9F9" : "#fff",
            cursor: state.isSelected ? "none" : "pointer",
            "&:hover": {
                backgroundColor: state.isSelected ? "#FAF9F9" : "#fff"
            }
        }),
    };
    
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
    }


    return (
        <div className="detail-wrapper bg-white rounded-[4px] py-[35px] px-[40px] shadow-shadow3 h-[670px]">
            <div className="detail-wrap grid grid-cols-5 h-[100%] gap-4">
                <div className="imgs-slider flex col-span-2">
                    <div className="slider-navs w-[120px]">
                        <div className="upslide shadow-shadow8 cursor-pointer h-[30px] flex items-center justify-center">
                            <img src="/images/up.svg" alt="up" />
                        </div>
                        <ul>
                            <li className="h-[180px]">
                                <img src="" alt="product" className="w-[100%] h-[100%] object-cover" />
                            </li>
                            <li className="h-[180px]">
                                <img src="" alt="product" className="w-[100%] h-[100%] object-cover" />
                            </li>
                            <li className="h-[180px]">
                                <img src="" alt="product" className="w-[100%] h-[100%] object-cover" />
                            </li>
                        </ul>
                        <div className="downslide shadow-shadow8 cursor-pointer h-[30px] flex items-center justify-center">
                            <img src="/images/up.svg" alt="down" className="rotate-180" />
                        </div>
                    </div>

                    <div className="selected-img w-[400px] relative rounded-[4px] overflow-hidden ml-[30px]">
                        <img src="" alt="" className="w-[100%] h-[100%] object-cover" />

                        <div className="sale absolute left-[10px] top-[10px]">
                            <img src="/images/sale.svg" alt="sale" />
                        </div>
                    </div>
                </div>

                <div className="product-info-wrap col-span-3">
                    <div className="product-info w-[45%]">
                        <h3 className="text-lgg">
                            <span className="mr-[2px] font-semibold underline hover:underline-none cursor-pointer">
                                Koton
                            </span>
                            Title
                        </h3>

                        <p className="my-[10px] text-xsm font-semibold">
                            <span className="text-grey5 mr-[2px]">
                                Satıcı:
                            </span>
                            Koton
                            <img src="/images/rating.svg" alt="rating-seller" className="ml-[6px] inline relative -top-[1px]" />
                        </p>

                        <div className="stars flex items-center">
                            <span className="mr-[10px] text-sm font-semibold">4.5</span>
                            <img src="/images/star.svg" alt="star" className="mr-[6px] w-[16px]" />
                            <img src="/images/star.svg" alt="star" className="mr-[6px] w-[16px]" />
                            <img src="/images/star.svg" alt="star" className="mr-[6px] w-[16px]" />
                            <img src="/images/star.svg" alt="star" className="mr-[6px] w-[16px]" />
                            <img src="/images/star-gray.svg" alt="star-gray" className="mr-[6px]" />
                        </div>

                        <div className="product-price flex items-center mt-[12px]">
                            <div className="old-price text-lg text-grey5 line-through mr-[9px]">
                                1000,99TL
                            </div>
                            <div className="new-price font-bold text-xxl text-red">
                                1000
                                <span className="text-lg">TL</span>
                            </div>
                        </div>
                    </div>

                    <div className="features-wrapper grid grid-cols-7 gap-4 mt-[40px] mb-[34px]">
                        <div className="colors-wrap border border-solid border-grey7 rounded-[4px] px-[20px] pt-[14px] pb-[20px] col-span-5 h-[155px]">
                            <h6 className="text-sm font-semibold mb-[18px]">
                                Renk
                            </h6>

                            <ul className="color-imgs flex items-center">
                                <li className="rounded-t-[4px] overflow-hidden mr-[20px]">
                                    <img src="" alt="" className="w-[100%] h-[100%] object-cover" />
                                </li>
                            </ul>
                        </div>

                        <div className="border border-solid border-grey7 rounded-[4px] h-[155px] py-[14px] px-[24px] flex flex-col items-center justify-center text-center">
                            <img src="/images/car.svg" alt="car" />

                            <span className="gradient mt-[15px] text-sm font-semibold">
                                KARGO BEDAVA
                            </span>
                        </div>

                        <div className="border border-solid border-grey7 rounded-[4px] h-[155px] py-[14px] px-[24px] flex flex-col items-center justify-center text-center">
                            <img src="/images/ticket.svg" alt="ticket" />

                            <span className="gradient mt-[15px] text-sm font-semibold">
                                <span className="font-bold text-xl inline-block">
                                    40%
                                </span>        
                                İNDİRİM
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-4">
                        <div className="col-span-5 grid grid-cols-2 gap-4">
                            <div className="sizes-sec">
                                <div className="sizes-head flex items-center justify-between">
                                    <h6 className="text-sm font-semibold">
                                        Beden
                                    </h6>

                                    <a href="#" className="text-xsm text-grey8 underline">
                                        Beden Tablosu
                                    </a>
                                </div>
                                <div className="sizes-body mt-[18px]">
                                    <Select 
                                        value={selectedOption}
                                        onChange={handleChange}
                                        styles={customStyles}
                                        options={sizes} 
                                        placeholder={<div>Beden seçiniz</div>} 
                                        components={{
                                            IndicatorSeparator: () => null
                                        }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
