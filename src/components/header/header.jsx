import React from 'react';
import styles from './header.module.scss';
import { Button } from '../button/button';
import ladybug from '../../assets/lady.png';

export const Header = () => {
    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>
                <img  src={ladybug} alt="ladybug image" />
                <span>Ladybug Solana</span>
            </div>
            
            <div className={styles.buttonContainer}>
                <Button text="Buy on Raydium" classname="button" link="https://www.google.com" />
            </div>

        </div>
    );
};
