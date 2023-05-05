import React, { useMemo, useState, useEffect } from 'react'
import styles from './pageTemplate.module.css'

const PageTemplate = ({
    prevPage,
    nextPage,
    setPage,
    currentPage,
    totalPages,
    maxShowNumbers = 5,
}) => {
    console.log("🚀 ~ file: pageTemplate.jsx:12 ~ currentPage:", currentPage)
    console.log("🚀 ~ file: pageTemplate.jsx:11 ~ totalPages:", totalPages)
    const [showArray, setShowArray] = useState(null);

    useEffect(() => {
        const array = Array.from(Array(maxShowNumbers), (_, index) => index - Math.floor(maxShowNumbers / 2))
            .map(item => parseInt(item) + parseInt(currentPage));
        setShowArray(array);

    }, [maxShowNumbers, currentPage]);
    // const showArray = useMemo(() => {
    //     console.log("🚀 ~ file: pageTemplate.jsx:17 ~ currentPage:", currentPage)
    //     return Array.from(Array(maxShowNumbers), (_, index) => index - Math.floor(maxShowNumbers / 2))
    //         .map(item => parseInt(item) + parseInt(currentPage))
    // }, [maxShowNumbers, currentPage])
    // console.log("🚀 ~ file: pageTemplate.jsx:15 ~ showArray ~ showArray:", showArray)
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