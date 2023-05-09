import React, { useEffect, useState } from 'react'
import styles from './banner.module.css'

const imageMap = new Map([
    ['lottery', import('assets/img/category/lottery.png')],
    ['sports', import('assets/img/category/sports.png')],
    ['poker', import('assets/img/category/poker.png')],
    ['matka', import('assets/img/category/matka.png')],
    ['casino', import('assets/img/category/banner.png')],
])

const Banner = ({ category = 'casino' }) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        imageMap.get(category).then(res => setImage(res.default))
    }, [category]);

    console.log(`🚀 ~ file: tagPage.jsx:122 ~ banner ~ imageMap.get('${category}'):`, imageMap.get(category))
    return image && (<div className={`section ${styles.section}`}>
        <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
    </div>)
};

export default Banner