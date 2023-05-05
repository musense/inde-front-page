import React from 'react'
import styles from "./goToContentPage.module.css";
import GoToBtn from "./goToBtn"

export default function GoToContentPage({ categoryName, prevID, prevTitle, nextID, nextTitle }) {




    
    return <div className={styles['content-btn']}>
        <GoToBtn category={categoryName} title={prevTitle} id={prevID} type='prev' />
        <GoToBtn category={categoryName} title={nextTitle} id={nextID} type='next' />
    </div>;
}

