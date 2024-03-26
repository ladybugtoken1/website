import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

export const Button = ({text, classname, link}) => {
    return (
        <div className={cn(styles.container, styles[classname])}>
            <span>{text}</span>
        </div>
    );
}