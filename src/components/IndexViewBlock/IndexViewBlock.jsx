import React from 'react'
import styles from './indexViewBlock.module.css';
import { Link } from 'react-router-dom';

export default function IndexViewBlock({ title, article, image, reverse = false }) {
    return <div style={reverse ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }} 
    className={`${styles['index-paragraph-wrapper']} ${reverse ? styles['reverse'] : ''}`}>
        <div className={styles['index-type-image']}>
            <img src={image.src} alt={image.altText} />
        </div>
        <div className={styles['index-type-container']}>
            <div className={`${styles['index-type-title']} title`}>
                {title}
            </div>
            <div className={styles['index-type-article']}>
                {article}
            </div>
            <Link to={`/c/${title.toLowerCase()}`} className={styles['index-more-btn']} />
        </div>
    </div>;
}
