import React from "react";
import mainStyles from './navigateContainer.module.css'
import { Link } from "react-router-dom";

function NavigateContainer({
    category,
    contentID,
    children,
    index,
    styles,
    customClassName = "title-container" }) {

    if (styles === null || styles === '' || styles === undefined) {
        styles = mainStyles
    }
    
    return (<Link
        target="_blank" 
        rel="noopener noreferrer"
        to={`/c/${category}/p/${contentID}`}
        className={styles[customClassName]}
        // onClick={() => goToContent(contentID)}
    >
        {children}
    </Link>);
}

export default NavigateContainer;