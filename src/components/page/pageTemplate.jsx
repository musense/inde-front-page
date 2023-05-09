import React, { useMemo, useState, useEffect, useRef } from 'react'
import styles from './pageTemplate.module.css'
import useScrollToTop from '../hook/useScrollToTop';

const PageTemplate = ({
    prevPage,
    nextPage,
    setPage,
    currentPage,
    totalPages,
    maxShowNumbers = 5,
}) => {

    const [showArray, setShowArray] = useState(null);
    const currentPageRef = useRef(null)
    const skip = !!currentPageRef.current && currentPageRef.current !== currentPage
    useScrollToTop(404, skip);
    useEffect(() => {
        const array = Array.from(Array(maxShowNumbers), (_, index) => index - Math.floor(maxShowNumbers / 2))
            .map(item => parseInt(item) + parseInt(currentPage));
        setShowArray(array);
        currentPageRef.current = currentPage
    }, [maxShowNumbers, currentPage]);

    return (
        <div className={styles['page-wrapper']}>
            <button onClick={() => prevPage()} value="<"
                className={parseInt(currentPage) === 1 ? styles.displayNone : ""}>&lt;</button>


            {totalPages - currentPage < 2 && totalPages > 5 && (
                <p>···</p>
            )}
            {showArray && showArray
                .map((item, index) => {
                    if (item <= 0)
                        return;
                    if (item > totalPages)
                        return;
                    // console.log(`🚀 ~ file: pageTemplate.jsx: item `, item);
                    return <button key={index} value={item} onClick={() => setPage(item)}
                        className={parseInt(currentPage) === parseInt(item) ? styles.active : ""}>{item}</button>;
                })}
            {currentPage <= 2 && totalPages > 5 && (
                <p>···</p>
            )}
            <button onClick={() => nextPage()} value=">"
                className={parseInt(currentPage) === totalPages ? styles.displayNone : ""}>&gt;</button>
        </div>
    );
}


export default PageTemplate