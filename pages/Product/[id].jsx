import React from 'react'

import Image from 'next/image';

import styles from '../../styles/Product.module.css';



const Product = () => {


    const [size, setSize] = React.useState(0);



    const pizza={

        id:1,

        img:'/img/pizza4.png',

        name: 'CAMPAGNOLA',

        price:[19.9,23.9,27.9],

        desc: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs',


    };
    return (
        <div className={styles.container}>

            <div className={styles.left}>

                <div className={styles.imgContainer}>

                    <Image src={pizza.img} layout="fill" alt="" objectFit="contain"/>


                </div>


            </div>

            <div className={styles.right}>


                <h1 className={styles.title}>{pizza.name}</h1>

                <span className={styles.price}>${pizza.price[size]}</span>

                <p className={styles.desc}>{pizza.desc}</p>

                <h3 className={styles.choose}>Choose the Size</h3>

                <div className={styles.sizes}>


                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/pizza4.png" layout="fill" alt=""/>
                        <span className={styles.number}>small</span>

                    </div>


                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/img/pizza4.png" layout="fill" alt=""/>
                        <span className={styles.number}>Medium</span>

                    </div>

                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/pizza4.png" layout="fill" alt=""/>
                        <span className={styles.number}>Large</span>

                    </div>

                    


                </div>


                <h3>Choose additional ingredients</h3>

                <div className={styles.ingredients}>


                    <div className={styles.option}>

                        <input type = "checkbox" id="double" name="double" className={styles.checkbox}/>

                        <label htmlFor="double">Double Ingredients</label>


                    </div>

                    <div className={styles.option}>

                        <input type = "checkbox" id="cheese" name="cheese" className={styles.checkbox}/>

                        <label htmlFor="cheese">Extra cheese</label>


                    </div>

                    <div className={styles.option}>

                        <input type = "checkbox" id="spicy" name="spicy" className={styles.checkbox}/>

                        <label htmlFor="spicy">Spicy Sauce</label>


                    </div>

                    <div className={styles.option}>

                        <input type = "checkbox" id="garlic" name="garlic" className={styles.checkbox}/>

                        <label htmlFor="garlic">Garlic Sauce</label>


                    </div>


                </div>


                <div className={styles.add}>
                    
                    

                    <input type="number" defaultValue={1} className={styles.quantity}/>

                    <h3 className={styles.addquantity}>Quantity</h3>


                    

                    
                </div>


                <button className={styles.button}> Add to Cart</button>



            </div>
            
        </div>
    )
}

export default Product;
