import React from 'react';
import styles from './chart.module.scss';

export const Chart = () => {
    return (
        <div className={styles.container}>
            <span>View on Dexscreener</span>
            <iframe 
                src="https://dexscreener.com/solana/B1vdiuVHwBSnf42Ju2S4EmFc9YP421miHdkdtkgFHTDV?embed=1&theme=dark&info=0"
                frameBorder="0"
            ></iframe>
        </div>
    )
}