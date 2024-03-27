import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

import dextools from '../../assets/dextools.png';

export const Button = ({text, classname, link, image=null, overrideStyles={}}) => {
    return (
        <div  className={cn(styles.container, styles[classname])} onClick={() => window.open(link, '_blank')}>
            {
                image 
                ? <img src={image} alt="button image" />
                : <span>{text}</span>
            }
        </div>
    );
}