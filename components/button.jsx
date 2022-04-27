import styles from '../styles/components/button.module.css'
import React, { useState } from 'react';

export default function Button({children, disabled}){
    return (
            <button className={styles.btn} disabled={disabled} >{children}</button>
       
        
    )
}