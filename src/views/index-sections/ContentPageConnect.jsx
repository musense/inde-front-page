import React from "react";
import styles from "./contentPage.module.css";
import NavigateContainer from "./NavigateContainer";

function ContentPageConnect({ contents, }) {

    return (contents.map((content, index) => {
        if (index > 3) return;

        return (
            <NavigateContainer
                key={index}
                index={index}
                contentID={content._id}
                customClassName={"connect-flex-box"}>

                <div className={styles['connect-image']}>
                </div>
                <div className={styles['connect-title']}>
                    {content.title}
                </div>
            </NavigateContainer>
        );
    }));
}

export default ContentPageConnect;