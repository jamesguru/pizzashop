import React from 'react';

import styles from '../styles/Featured.module.css';

import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>


            <div className={styles.heading}>


                <span>Find your favourite pizza & additional toppings.</span>


            </div>

            <div className={styles.image}>


                <Image src="/img/pizza4.png" alt="" height="500px" width="500px" objectFit="contain" />


            </div>
            
        </div>
    )
}

export default Featured
