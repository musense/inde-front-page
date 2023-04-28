import React from "react";
import styles from './newTitle.module.css'
import { useNavigate } from "react-router-dom";

function NavigateContainer({ contentID, children, index, customClassName = "title-container" }) {
    const navigate = useNavigate()
    function goToContent(contentID) {
        if (contentID === null) return
        navigate(`/content/${contentID}`)
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