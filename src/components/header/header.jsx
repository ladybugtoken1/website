import React from 'react';
import styles from './header.module.scss';
import { Button } from '../button/button';
import ladybug from '../../assets/lady.png';

import dextools from '../../assets/dextools1.svg';

export const Header = () => {
    return (
        <div className={styles.container}>

            <div className={styles.leftSide}>
                <img  src={ladybug} alt="ladybug image" />
                <span>Ladybug</span>
            </div>

            <div className={styles.buttonContainer}>
                <Button image={dextools} classname="dextools" link="https://www.dextools.io/app/en/solana/pair-explorer/B1vdiuVHwBSnf42Ju2S4EmFc9YP421miHdkdtkgFHTDV" />
                <Button text="Buy on Jupiter" classname="button" link="https://jup.ag/swap/SOL-LADY_G65cADQtt9fZMyuU5vZxCZoimNGQENxE1112C8e4wUeM" />
            </div>

        </div>
    );
};
