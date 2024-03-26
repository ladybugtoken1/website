import React from 'react';
import styles from './header.module.scss';
import { Button } from '../button/button';
import ladybug from '../../assets/lady.png';

export const Header = () => {
    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>
                <img  src={ladybug} alt="ladybug image" />
                <span>Ladybug</span>
            </div>
            
            <div className={styles.buttonContainer}>
                <Button text="Buy on Birdseye" classname="button" link="https://birdeye.so/token/G65cADQtt9fZMyuU5vZxCZoimNGQENxE1112C8e4wUeM?chain=solana" />
            </div>

        </div>
    );
};
