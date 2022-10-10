import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from "../redux/features/postSlice";



const Product = (props) => {

    const {posts, loading} = useSelector((state) => state.post);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);
    
    const [fav, setFav] = useState(false);

    const toggleFav = (id) => {
        setFav({
          ...fav,
          [id]: !fav[id],
        });
    };

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} className="product-item rounded-[8px] bg-white shadow-shadow5 hover:shadow-shadow7 overflow-hidden">
                    <div className="img-wrap h-[420px] relative">

                        <img src={post.images[0]} alt={post.title} className="w-[100%] h-[100%] object-cover" />

                        <div className="addFav absolute top-[20px] right-0 bg-lwhite2 shadow-shadow6 rounded-l-[1000px] pl-[8px] pr-[11px] py-[7px]"
                        onClick={() => toggleFav(post.id)}>

                            <svg width="19" height="17" viewBox="0 0 19 17" fill={`${fav[post.id] ? 'red' : 'none'}`} xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.90318 9.89477L1.90314 9.89471C0.961243 8.40411 0.5 6.91003 0.5 5.45337C0.5 4.22078 1.00801 2.96259 1.90217 2.02029L1.90235 2.02011C2.83746 1.03364 4.04674 0.5 5.30702 0.5C6.80895 0.5 8.20937 1.18164 9.11223 2.30868L9.50342 2.79699L9.89344 2.30774C10.791 1.18176 12.1908 0.5 13.693 0.5C14.9532 0.5 16.1624 1.0336 17.0975 2.01998C17.9926 2.96787 18.5 4.22164 18.5 5.45337C18.5 6.91009 18.0387 8.40396 17.0972 9.88935L17.0968 9.89C16.3561 11.0627 15.3192 12.2343 14.0062 13.3643L14.006 13.3645C12.894 14.3226 11.7884 15.0813 10.9486 15.606C10.5291 15.868 10.1772 16.0709 9.92561 16.2102C9.79982 16.2799 9.69938 16.3336 9.62838 16.3707C9.55293 16.4102 9.51834 16.427 9.51979 16.4264L9.50942 16.4311L9.49928 16.4364L9.49535 16.4384L9.49517 16.4383C9.36714 16.373 7.19572 15.2663 4.99405 13.3693C3.68011 12.2337 2.64352 11.0668 1.90318 9.89477Z" 
                                stroke={`${fav[post.id] ? 'red' : '#1A1A1A'}`} />
                            </svg> 
                            
                        </div>

                        <div className="sale absolute left-[10px] top-[10px]">
                            <img src="/images/sale.svg" alt="sale" />
                        </div>

                        <div className="fast absolute left-0 bottom-[17px]">
                            <img src="/images/fast.svg" alt="fast" />
                        </div>
                    </div>

                    <div className="info-wrap py-[10px] px-[25px]">
                        <h6 className="text-base font-semibold">
                            {post.title}
                        </h6>

                        <div className="stars flex my-[7px]">
                            <img src="/images/star.svg" alt="star" className="mr-[5px]" />
                            <img src="/images/star.svg" alt="star" className="mr-[5px]" />
                            <img src="/images/star.svg" alt="star" className="mr-[5px]" />
                            <img src="/images/star.svg" alt="star" className="mr-[5px]" />
                            <img src="/images/star.svg" alt="star" className="mr-[5px]" />
                        </div>

                        <p className="text-tx text-sm mb-0 limited-text">{post.description}</p>

                        <div className="product-price flex items-center">
                            <div className="old-price font-semibold text-xsm text-grey5 line-through mr-[8px]">
                                1000,99TL
                            </div>
                            <div className="new-price font-bold text-llg text-black">
                                {post.price}
                                <span className="font-semibold text-sm">TL</span>
                            </div>
                        </div>

                        <div className="product-colors flex items-center">
                            <div className="selected-color-wrap mr-[10px] w-[16px] h-[16px] flex items-center justify-center border-2 border-solid border-bord1 rounded-[50%]">
                                <div className="selected-color rounded-[50%] w-[11px] h-[11px]"
                                style={{background: '#D7818A'}}></div>
                            </div>

                            <div className="unselected-color rounded-[50%] w-[11px] h-[11px]"
                            style={{background: '#88C7F3'}}></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Product;
