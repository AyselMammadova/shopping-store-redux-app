import React from 'react';
import styles from '../styles/Breadcrumb.module.css'

const Breadcrumb = () => {
    return (
        <div className="breadcrumb flex items-center justify-between mb-[16px]">
            <h6 className="text-lg font-semibold">
                Koton
            </h6>

            <ul className="flex items-center">
                <li className="text-xxsm">
                    <a href="/" className={`${styles.pageLink} relative text-grey5 ml-[25px] hover:underline`}>
                        Ana sayfa
                    </a>
                </li>
                <li className="text-xxsm">
                    <a href="/" className={`${styles.pageLink} relative text-grey5 ml-[25px] hover:underline`}>
                        Tüm Butikler
                    </a>
                </li>
                <li className="active-page text-xxsm text-dgrey ml-[25px]">
                    Koton
                </li>
            </ul>
        </div>
    )
}

export default Breadcrumb;