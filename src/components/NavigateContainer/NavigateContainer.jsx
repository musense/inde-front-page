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
        to={`/c/${category}/p/${contentID}`}
        className={styles[customClassName]}>
        {children}
    </Link>);
}

export default NavigateContainer;