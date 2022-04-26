import styles from '../styles/components/button.module.css'
import React, { useState } from 'react';

export default function Button({children}){
    const [isActive, setIsActive] = useState(null);
    return (
        <div className='btn-container'>
            <button className={styles.btn} disabled={!isActive}>{children}</button>
        </div>
        
    )
}