import React from 'react';
import BaseCategories from './BaseCategories';
import SubCategories from './SubCategories';

const Categories = () => {

    return (
        <>
            <div className="relative cat-wrapper bg-white px-[34px] py-[10px] border-solid border border-lwhite4 flex items-center">
                
                <div className="left-side mr-[20px] sxl:mr-[30px]">
                    <BaseCategories />
                </div>

                <div className="right-side w-[100%] hidden sm:block">
                    <SubCategories />
                </div>
            </div>
        </>
    )
}

export default Categories;
