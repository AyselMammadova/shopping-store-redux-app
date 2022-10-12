import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { addToCart, decreaseCart, getTotals } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';


const ProductDetails = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log(id)

    const [selectedItem, setSelectedItem] = useState();

    const getSelected = async() => {

        if(id !== undefined) {
            const response = await axios
            .get(`https://api.escuelajs.co/api/v1/products/${id}`)
            .catch((err) => {
                console.log("Err",err)
            });
            setSelectedItem(response.data)
        }  
    };

    useEffect(() => {
        getSelected();
    }, [id]);


    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const cartIndex = parseInt(id);

    let cartItemm = [];

    cart.cartItems && cart.cartItems.map((cartItem) => {
        if(cartItem.id == cartIndex) {
            cartItemm = cartItem
        }    
    })

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };


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


    // notification
    const [bell, setBell] = useState(false);

    // add fav
    const [fav, setFav] = useState(false);


    return (
        <>
            {selectedItem && 
                <div key={selectedItem.id} className="detail-wrapper bg-white rounded-[4px] py-[35px] px-[40px] shadow-shadow3">
                    <div className="detail-wrap grid grid-cols-5 h-[100%] gap-4">
                        <div className="imgs-slider flex col-span-5 xl:col-span-2 mb-[30px]  xl:mb-0 justify-center xl:justify-start">
                            <div className="slider-navs w-[120px]">
                                <div className="upslide shadow-shadow8 cursor-pointer h-[30px] flex items-center justify-center">
                                    <img src="/images/up.svg" alt="up" />
                                </div>
                                <ul style={{height: 'calc(100% - 60px)'}}>
                                    {selectedItem.images.map((image, i) => (
                                        <li style={{height: '33.33%'}} key={i}>
                                            <img src={image} alt={selectedItem.title} className="w-[100%] h-[100%] object-cover" />
                                        </li>
                                    ))}
                                </ul>
                                <div className="downslide shadow-shadow8 cursor-pointer h-[30px] flex items-center justify-center">
                                    <img src="/images/up.svg" alt="down" className="rotate-180" />
                                </div>
                            </div>

                            <div className="selected-img w-[400px] h-[100%] relative rounded-[4px] overflow-hidden ml-[30px]">
                                <img src={selectedItem.images[0]} alt={selectedItem.title} className="w-[100%] h-[100%] object-cover" />

                                <div className="sale absolute left-[10px] top-[10px]">
                                    <img src="/images/sale.svg" alt="sale" />
                                </div>
                            </div>
                        </div>

                        <div className="product-info-wrap col-span-5 xl:col-span-3 grid">
                            <div className="product-info ssm:w-[45%]">
                                <h3 className="text-lgg">
                                    <span className="mr-[2px] font-semibold underline hover:underline-none cursor-pointer">
                                        Koton
                                    </span>
                                    {selectedItem.title}
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
                                        {cartItemm.cartQuantity !== undefined ? 
                                            selectedItem.price * cartItemm.cartQuantity
                                            : selectedItem.price
                                        }
                                        
                                        <span className="text-lg">TL</span>
                                    </div>
                                </div>
                            </div>

                            <div className="features-wrapper grid grid-cols-7 gap-4 mt-[40px] mb-[34px]">
                                <div className="colors-wrap border border-solid border-grey7 rounded-[4px] px-[20px] pt-[14px] pb-[20px] col-span-7 md:col-span-5 h-[155px]">
                                    <h6 className="text-sm font-semibold mb-[18px]">
                                        Renk
                                    </h6>

                                    <ul className="color-imgs flex items-center h-hcalc34">
                                        {selectedItem.images.map((image, i) => (  
                                            <li className="rounded-t-[4px] overflow-hidden mr-[20px] w-[56px] h-[100%]" key={i}>
                                                <img src={image} alt={selectedItem.title} className="w-[100%] h-[100%] object-cover" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border border-solid border-grey7 rounded-[4px] h-[155px] py-[14px] px-[24px] flex flex-col items-center justify-center text-center col-span-4 md:col-span-1">
                                    <img src="/images/car.svg" alt="car" />

                                    <span className="gradient mt-[15px] text-sm font-semibold">
                                        KARGO BEDAVA
                                    </span>
                                </div>

                                <div className="border border-solid border-grey7 rounded-[4px] h-[155px] py-[14px] px-[24px] flex flex-col items-center justify-center text-center col-span-3 md:col-span-1">
                                    <img src="/images/ticket.svg" alt="ticket" />

                                    <span className="gradient mt-[15px] text-sm font-semibold">
                                        <span className="font-bold text-xl inline-block">
                                            40%
                                        </span>        
                                        İNDİRİM
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 gap-4 items-end">
                                <div className="col-span-7 md:col-span-5 grid ssm:grid-cols-2 gap-4">
                                    <div className="left-side">
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
                                                    instanceId={selectedItem.id}
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

                                        <p className="mt-[16px] text-xsm font-semibold">
                                            <span className="text-grey5 mr-[2px]">
                                                Tahmini Teslimat: 
                                            </span>
                                            12 - 26 Haziran
                                        </p>
                                    </div>
                                    
                                    <div className="right-side">
                                        <div className="count-sec">
                                            <div className="count-head">
                                                <h6 className="text-sm font-semibold">
                                                    Adet
                                                </h6>
                                            </div>
                                            <div className="count-body mt-[18px]">
                                                <div className="cart-item-quantity w-[100%] inline-flex rounded-[6px] h-[50px] border border-solid border-grey7">
                                                    <button
                                                        className="text-xl text-grey8 w-[52px] flex items-center justify-center"
                                                        style={{lineHeight: "30px"}}
                                                        disabled={`${cartItemm.cartQuantity == null ? 'disabled' : ''}`}
                                                        onClick={() => handleDecreaseCart(selectedItem)}
                                                    >
                                                        -
                                                    </button>

                                                    <div className="count w-calc104 border-l border-l-solid border-l-grey7 border-r border-r-solid border-r-grey7 bg-lwhite6 flex items-center justify-center px-[15px] text-sm">
                                                        {cartItemm.cartQuantity !== undefined ? 
                                                            cartItemm.cartQuantity
                                                            : 0
                                                        }
                                                    </div>

                                                    <button
                                                        className="text-xl text-grey8 w-[52px] flex items-center justify-center"
                                                        style={{lineHeight: "30px"}}
                                                        onClick={() => handleAddToCart(selectedItem)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-7 md:col-span-2 grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="border border-solid border-grey8 rounded-[6px] h-[50px] flex flex-col items-center justify-center text-center cursor-pointer"
                                        onClick={() => setBell(!bell)}>
                                            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.9327 11.1323C21.6567 11.1323 21.4327 10.9083 21.4327 10.6323C21.4327 7.69435 20.2887 4.93135 18.2107 2.85435C18.0157 2.65935 18.0157 2.34235 18.2107 2.14735C18.4057 1.95235 18.7227 1.95235 18.9177 2.14735C21.1847 4.41335 22.4327 7.42635 22.4327 10.6323C22.4327 10.9083 22.2087 11.1323 21.9327 11.1323Z" 
                                                fill={`${bell ? '#85A1F2' : '#A6A6A6'}`} stroke={`${bell ? '#85A1F2' : '#A6A6A6'}`} strokeWidth="0.3"/>
                                                <path d="M0.932617 11.1323C0.656617 11.1323 0.432617 10.9083 0.432617 10.6323C0.432617 7.42635 1.68062 4.41335 3.94762 2.14735C4.14262 1.95235 4.45962 1.95235 4.65462 2.14735C4.84962 2.34235 4.84962 2.65935 4.65462 2.85435C2.57662 4.93135 1.43262 7.69435 1.43262 10.6323C1.43262 10.9083 1.20862 11.1323 0.932617 11.1323Z" 
                                                fill={`${bell ? '#85A1F2' : '#A6A6A6'}`} stroke={`${bell ? '#85A1F2' : '#A6A6A6'}`} strokeWidth="0.3"/>
                                                <path d="M12.9326 4.81232C12.6566 4.81232 12.4326 4.58832 12.4326 4.31232V2.63232C12.4326 2.08132 11.9836 1.63232 11.4326 1.63232C10.8816 1.63232 10.4326 2.08132 10.4326 2.63232V4.31232C10.4326 4.58832 10.2086 4.81232 9.93262 4.81232C9.65662 4.81232 9.43262 4.58932 9.43262 4.31232V2.63232C9.43262 1.52932 10.3296 0.632324 11.4326 0.632324C12.5356 0.632324 13.4326 1.52932 13.4326 2.63232V4.31232C13.4326 4.58932 13.2086 4.81232 12.9326 4.81232Z" 
                                                fill={`${bell ? '#85A1F2' : '#A6A6A6'}`} stroke={`${bell ? '#85A1F2' : '#A6A6A6'}`} strokeWidth="0.3"/>
                                                <path d="M11.4326 24.6323C9.50262 24.6323 7.93262 23.0623 7.93262 21.1323C7.93262 20.8563 8.15662 20.6323 8.43262 20.6323C8.70862 20.6323 8.93262 20.8563 8.93262 21.1323C8.93262 22.5103 10.0546 23.6323 11.4326 23.6323C12.8106 23.6323 13.9326 22.5103 13.9326 21.1323C13.9326 20.8563 14.1566 20.6323 14.4326 20.6323C14.7086 20.6323 14.9326 20.8563 14.9326 21.1323C14.9326 23.0623 13.3626 24.6323 11.4326 24.6323Z" 
                                                fill={`${bell ? '#85A1F2' : '#A6A6A6'}`} stroke={`${bell ? '#85A1F2' : '#A6A6A6'}`} strokeWidth="0.3"/>
                                                <path d="M19.9326 21.6323H2.93262C2.10562 21.6323 1.43262 20.9593 1.43262 20.1323C1.43262 19.6933 1.62362 19.2783 1.95762 18.9923C3.53362 17.6603 4.43262 15.7223 4.43262 13.6703V10.6323C4.43262 6.77232 7.57262 3.63232 11.4326 3.63232C15.2926 3.63232 18.4326 6.77232 18.4326 10.6323V13.6703C18.4326 15.7233 19.3316 17.6603 20.8996 18.9853C21.2416 19.2783 21.4326 19.6933 21.4326 20.1323C21.4326 20.9593 20.7606 21.6323 19.9326 21.6323ZM11.4326 4.63232C8.12362 4.63232 5.43262 7.32332 5.43262 10.6323V13.6703C5.43262 16.0183 4.40462 18.2333 2.61162 19.7493C2.49662 19.8473 2.43262 19.9863 2.43262 20.1323C2.43262 20.4083 2.65662 20.6323 2.93262 20.6323H19.9326C20.2086 20.6323 20.4326 20.4083 20.4326 20.1323C20.4326 19.9863 20.3686 19.8473 20.2576 19.7523C18.4616 18.2333 17.4326 16.0173 17.4326 13.6703V10.6323C17.4326 7.32332 14.7416 4.63232 11.4326 4.63232Z" 
                                                fill={`${bell ? '#85A1F2' : '#A6A6A6'}`} stroke={`${bell ? '#85A1F2' : '#A6A6A6'}`} strokeWidth="0.3"/>
                                            </svg>
                                        </div>

                                        <p className="mt-[16px] text-xsm 2xl:text-xssm 2xll:text-xsm font-semibold text-center">
                                            12 - 26 Haziran
                                        </p>
                                    </div>

                                    <div>
                                        <div className="border border-solid border-grey8 rounded-[6px] h-[50px] flex flex-col items-center justify-center text-center cursor-pointer"
                                        onClick={() => setFav(!fav)}>
                                            <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0809 22.6323L11.7951 22.484C11.677 22.4222 8.85023 20.9576 5.97992 18.4239C4.28383 16.9222 2.92944 15.3649 1.95403 13.7829C0.711476 11.7683 0.0839844 9.71659 0.0839844 7.68963C0.0839844 5.92221 0.792242 4.13626 2.02859 2.80143C3.32085 1.4048 5.01073 0.632324 6.78758 0.632324C8.87508 0.632324 10.8259 1.60255 12.0871 3.21547C13.3421 1.60255 15.2929 0.632324 17.3804 0.632324C19.1572 0.632324 20.8471 1.4048 22.1394 2.80143C23.3757 4.14244 24.084 5.92221 24.084 7.68963C24.084 9.71659 23.4565 11.7683 22.2139 13.7767C21.2385 15.3587 19.8841 16.9222 18.188 18.4177C15.3177 20.9514 12.4909 22.4222 12.3729 22.4778L12.0809 22.6323ZM6.78758 1.86828C3.88 1.86828 1.32654 4.58738 1.32654 7.68963C1.32654 11.793 4.30868 15.2908 6.80622 17.4969C9.04904 19.4745 11.3043 20.7969 12.0809 21.2295C12.8637 20.7969 15.1376 19.4621 17.3804 17.4784C19.8717 15.2722 22.8414 11.7868 22.8414 7.68963C22.8414 4.58738 20.288 1.86828 17.3804 1.86828C15.4109 1.86828 13.5906 2.9312 12.6276 4.63682L12.0871 5.59468L11.5466 4.63682C10.5774 2.9312 8.75704 1.86828 6.78758 1.86828Z" 
                                                fill={`${fav ? 'red' : '#A6A6A6'}`} />
                                            </svg>
                                        </div>

                                        <p className="mt-[16px] text-xsm font-semibold text-center">
                                            <span className="text-grey5 mr-[2px]">
                                                Favori: 
                                            </span>
                                            1565
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-7 gap-4 mt-[46px]">
                                <div className="col-span-7 md:col-span-5 grid ssm:grid-cols-2 gap-4">
                                    <button className="rounded-[100px] shadow-shadow9 bg-green text-white w-[100%] h-[50px] flex items-center justify-center font-semibold text-base">
                                        HEMEN AL
                                    </button>
                                    
                                    <button className="rounded-[100px] shadow-shadow10 bg-red text-white w-[100%] h-[50px] flex items-center justify-center font-semibold text-base"
                                    onClick={() => handleAddToCart(selectedItem)}>
                                        SEBETE EKLE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductDetails;
