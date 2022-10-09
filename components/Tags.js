import React, { useState } from 'react';


const Tags = () => {

    const tags = [
        {id: 1, name: 'Kadın'},
        {id: 2, name: 'Atlet'},
        {id: 3, name: 'Bere'},
        {id: 4, name: 'Bluz'},
        {id: 5, name: 'Erkek'},
        {id: 6, name: 'Atlet'},
        {id: 7, name: 'Bere'},
        {id: 8, name: 'Bluz'}
    ]

    return (
        <div className="tags flex items-center">
            {tags.map((tag, i) => (
                <div key={tag.id} className="tag cursor-pointer border border-solid border-dgrey2 rounded-[4px] bg-white 
                h-[34px] px-[9px] flex items-center justify-center mr-[16px]" onClick={(e) => e.currentTarget.remove()}>
                    <div className="tag-name text-xsm font-semibold text-black">
                        {tag.name}
                    </div>
                    <div className="remove-tag ml-[8px] relative top-[1px]">
                        <img src="/images/close.svg" alt="remove-tag" className="w-[8px]" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tags;
