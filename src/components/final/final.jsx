import React from 'react';
import styles from './final.module.scss';
import {Twitter} from '../logos/twitter.jsx';
import { Telegram } from '../logos/telegram';


export const Final = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.title}>
                <span>THE IMPORTANT STUFF</span>
            </div>

            <div className={styles.disclaimer}>
                <span>
                $LADY is a meme token and should not be considered an investment with any real value or anticipated return. $LADY is for entertainment purposes only."
                </span>
            </div>

            <div className={styles.social}>
                <Twitter />
                <Telegram />
            </div>
            
        </div>
    )
}