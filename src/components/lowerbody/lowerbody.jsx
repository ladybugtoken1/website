import React from 'react';
import styles from './lowerbody.module.scss';
import ladybug from '../../assets/ladybug.webp';
import ladybug2 from '../../assets/lady2.gif';

export const LowerBody = () => {

    return (
        <div className={styles.container}>

            <div className={styles.rightSide}>
                <h1>LADYBUG TOKEN</h1>
                <span> Ladybug Token, a community-driven, tax-free crypto on Solana, aims to disrupt the trend of fleeting critter coins with its meme-centric, secure, and fully transparent approach, sans presale or liquidity tax.</span>
            </div>

            <div className={styles.leftSide}>
                <img src={ladybug2} alt="placeholder" />
            </div>

        </div>
    )

    
}