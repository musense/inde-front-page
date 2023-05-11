import React from "react";
import mainStyles from './navigateContainer.module.css'
import { useNavigate } from "react-router-dom";

function NavigateContainer({
    category,
    contentID,
    children,
    index,
    styles,
    customClassName = "title-container" }) {
    const navigate = useNavigate()
    function goToContent(contentID) {
        if (contentID === null) return
        navigate(`/c/${category}/p/${contentID}`)
    }

    if (styles === null || styles === '' || styles === undefined) {
        styles = mainStyles
    }
    
    return (<div
        className={styles[customClassName]}
        onClick={() => goToContent(contentID)}
    >
        {children}
    </div>);
}

export default NavigateContainer;