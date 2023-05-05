import React from "react";
import styles from './contentPage.module.css'
import { useNavigate } from "react-router-dom";

function NavigateContainer({
    category,
    contentID,
    children,
    index,
    customClassName = "title-container" }) {
    const navigate = useNavigate()
    function goToContent(contentID) {
        if (contentID === null) return
        navigate(`/c/${category}/p/${contentID}`)
    }
    return (<div
        className={styles[customClassName]}
        key={index}
        onClick={() => goToContent(contentID)}
    >
        {children}
    </div>);
}

export default NavigateContainer;