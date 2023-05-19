import React, { useEffect, useState, useContext } from 'react'
import styles from "./goToContentPage.module.css";
import GoToBtn from "./goToBtn"

import { TitleContext } from "views/Index"

export default function GoToContentPage({
    categoryName,
    prevInfo,
    nextInfo
}) {
    const [state, dispatch] = useContext(TitleContext)
   
    return <div className={styles['content-btn']}>
        {prevInfo && <GoToBtn category={categoryName} title={prevInfo.title} id={prevInfo._id} type='prev' />}
        {nextInfo && <GoToBtn category={categoryName} title={nextInfo.title} id={nextInfo._id} type='next' />}
    </div>;
}

