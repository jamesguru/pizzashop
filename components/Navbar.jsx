import React from 'react';

import Image from 'next/image';

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>

                <div className={styles.callButton}>

                    <Image src="/img/telephone.png" height="45" width="45" alt=""/>


                </div>


                <div className={styles.texts}>

                    <div className={styles.text} style={{fontSize:'30px'}}>CALL US NOW!!!</div>

                    <div className={styles.text}> +2547652345</div>




                </div>


            </div>

            <div className={styles.item}>


                <ul className={styles.list}>


                    <li className={styles.listItem}>HomePage</li>

                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>



                </ul>

                
            </div>

            <div className={styles.item}>


                <div className={styles.cart}>



                    <Image src="/img/cart.png" alt="" className={styles.icon} width="30px" height="30px" />


                    

                </div>

                <div className={styles.counter}>2</div>


                
            </div>
        </div>
    )
}

export default Navbar
