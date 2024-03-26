import React from 'react';
import styles from './upperbody.module.scss';
import ladybug from '../../assets/still-lady.png';

export const UpperBody = () => {

    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>
                <img src={ladybug} alt="placeholder" />
            </div>

            <div className={styles.rightSide}>
                <h1>LADYBUG x Solana</h1>
                <span>Hop onto the LadyBugCoin train - Solana's luckiest and cheekiest coin! It's like finding a winning lottery ticket in your old jeans, but way cooler. Join us, and let's flip the crypto world on its wing!               </span>
            </div>

        </div>
    )

    
}