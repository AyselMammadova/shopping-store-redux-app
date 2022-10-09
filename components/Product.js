import React from 'react'

const Product = (props) => {

    // const [fav, setFav] = useState(props.fav);

    // const addFav= () => {
    //     setFav(prevFav => !prevFav);
    // }

    return (
        <div className="product-item rounded-[8px] bg-white shadow-shadow5 overflow-hidden">
            <div className="img-wrap h-[420px] relative">
                <img src="" alt="" />
                <div className="addFav absolute top-[20px] right-0 bg-lwhite2 shadow-shadow6 rounded-l-[1000px] pl-[8px] pr-[11px] py-[7px]">
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.90318 9.89477L1.90314 9.89471C0.961243 8.40411 0.5 6.91003 0.5 5.45337C0.5 4.22078 1.00801 2.96259 1.90217 2.02029L1.90235 2.02011C2.83746 1.03364 4.04674 0.5 5.30702 0.5C6.80895 0.5 8.20937 1.18164 9.11223 2.30868L9.50342 2.79699L9.89344 2.30774C10.791 1.18176 12.1908 0.5 13.693 0.5C14.9532 0.5 16.1624 1.0336 17.0975 2.01998C17.9926 2.96787 18.5 4.22164 18.5 5.45337C18.5 6.91009 18.0387 8.40396 17.0972 9.88935L17.0968 9.89C16.3561 11.0627 15.3192 12.2343 14.0062 13.3643L14.006 13.3645C12.894 14.3226 11.7884 15.0813 10.9486 15.606C10.5291 15.868 10.1772 16.0709 9.92561 16.2102C9.79982 16.2799 9.69938 16.3336 9.62838 16.3707C9.55293 16.4102 9.51834 16.427 9.51979 16.4264L9.50942 16.4311L9.49928 16.4364L9.49535 16.4384L9.49517 16.4383C9.36714 16.373 7.19572 15.2663 4.99405 13.3693C3.68011 12.2337 2.64352 11.0668 1.90318 9.89477Z" stroke="#1A1A1A"/>
                    </svg> 
                </div>
            </div>
        </div>
    )
}

export default Product;
