import React from 'react';

import Image from 'next/image';

import styles from '../../styles/Order.module.css';


const Order = () => {


    const status= 1;

    const statusClass = (index) =>{

        if(index - status < 1) return styles.done;

        if(index - status === 1) return styles.inProgress;

        if(index - status > 1) return styles.undone;




    }


    return (
        <div className={styles.container}>

            <div className={styles.left}>

                <div className={styles.row}>


                <table className={styles.table}>

                                <tr className={styles.tr}>


                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Address</th>
                                    <th>Total</th>
                                



                                </tr>

                                <tr>


                                        

                                    <td>

                                        <span className={styles.id}>67980384747838</span>

                                    </td>


                                    <td>

                                        <span className={styles.name}>Bahati Nzema</span>

                                    </td>


                                    <td>

                                        <span className={styles.address}>Nairobi East. Embakasi</span>

                                    </td>


                                

                                    <td>

                                        <span className={styles.total}>$39.80</span>

                                    </td>
                                </tr>




                                </table>


                </div>

        <div className={styles.row}>


            <div className={statusClass(0)}>

                <Image src="/img/payment.png" alt="" width={50} height={50} />

                <span>payment</span>


                <div className={styles.checkedIcon}>


                <Image src="/img/checked.jpg" alt="" className={styles.checkedIcon} width={50} height={50} />

                </div>


            </div>


            <div className={statusClass(1)}>

                <Image src="/img/preparing.png" alt="" width={50} height={50} />

                <span>preparing</span>


                <div className={styles.checkedIcon}>


                <Image src="/img/checked.jpg" alt="" className={styles.checkedIcon} width={50} height={50} />

                </div>


            </div>


            <div className={statusClass(2)}>

                <Image src="/img/delivering.png" alt="" width={50} height={50} />

                <span>On the way</span>


                <div className={styles.checkedIcon}>


                <Image src="/img/checked.jpg" alt="" className={styles.checkedIcon} width={50} height={50} />

                </div>


            </div>
            <div className={statusClass(3)}>

                <Image src="/img/deliverer.jpeg" alt="" width={70} height={70} objectFit="contain"/>

                <span>Delivered</span>


                <div className={styles.checkedIcon}>


                <Image src="/img/checked.jpg" alt="" className={styles.checkedIcon} width={50} height={50} />

                </div>


            </div>



        </div>


            </div>


            <div className={styles.right}>


            <div className={styles.wrapper}>


                    <h2>CART TOTAL</h2>


                    <div className={styles.totalText}>


                        <b className={styles.totalTextTitle}> Subtotal: </b> $79.60


                    </div>

                    <div className={styles.totalText}>


                        <b className={styles.totalTextTitle}> Subtotal: </b> $79.60


                    </div>

                    <div className={styles.totalText}>


                        <b className={styles.totalTextTitle}> Discount: </b> $0.00


                    </div>
                    <div className={styles.totalText}>


                        <b className={styles.totalTextTitle}> Total: </b> $79.60


                    </div>


                    <button disabled className={styles.button}>PAID</button>



                    </div>




            </div>
            
        </div>
    )
}

export default Order
