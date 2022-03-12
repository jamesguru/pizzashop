import React from 'react';
import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';

const PizzaCard = () => {
    return (
        <div className={styles.container}>

            <Image src="/img/pizza4.png" alt="" width="500" height="500"/>

            <h1 className={styles.title}>FIORI DI ZUCCA</h1>

            <span className={styles.price}>$19.90</span>

            <p className={styles.desc}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
            
        </div>
    )
}

export default PizzaCard
