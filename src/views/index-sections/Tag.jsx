import React from "react";
import styles from "./contentPage.module.css";
import { useNavigate } from "react-router-dom";

function Tag({ index, tag }) {
    console.log("🚀 ~ file: Tag.js:6 ~ Tag ~ tag", tag)
    const navigate = useNavigate();
    // function goToContentsByTag(tag) {
    //     navigate(`/content/tag/${tag}`)
    // }

    return (<div
        // onClick={() => goToContentsByTag(tag)}
        key={index}
        className={styles['trend-tags-flex-tags']}
    >
        #&nbsp;&nbsp;{tag.name}
    </div>);
}

export default Tag;