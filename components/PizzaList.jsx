import React from 'react';

import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>  

            <p className={styles.desc}>The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product</p> 


            <div className={styles.wrapper}>

                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                
            </div>         
        </div>
    )
}

export default PizzaList
