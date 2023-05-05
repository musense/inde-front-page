import React from "react";
import styles from "./indexDecorationImage.module.css";

//margin unit: px
function IndexDecorationImage({ imageType, marginTop, marginBottom }) {

    return (
        <div className={styles['image-wrapper']} style={{
            marginTop: marginTop,
            marginBottom: marginBottom,
        }}>
            <div className={`${styles.image} ${styles[imageType]}`}></div>
        </div>
    );
}

export default IndexDecorationImage;