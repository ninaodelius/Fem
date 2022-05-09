import styles from '../styles/components/button.module.css'
import React, { useState } from 'react';

export default function Button({children, disabled, type}){
    return (
            <button className={styles.btn} name="button" disabled={disabled} type={type} >{children}</button>
        
    )
    
}
