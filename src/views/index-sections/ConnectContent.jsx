import React from "react";

import styles from './tagContentPage.module.css';
import Tag from './Tag';
import NavigateContainer from "./NavigateContainer";

const dateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
const timeOption = {
    hour: '2-digit',
    hour12: false,
    hourCycle: 'h24',
    minute: '2-digit',
};

function ConnectContent({ index, content, item1=null }) {

    return (
        <NavigateContainer
            key={index}
            index={index}
            contentID={content._id}
            customClassName={"connect-container"}
        >
            <div className={styles['title-mainImage']}>
                <div className='title-main-date'>
                    <span className={styles['create-date']}>
                        {new Date(content.createdAt).toLocaleDateString(
                            undefined,
                            dateOption
                        )}
                        &nbsp; &nbsp;
                        {new Date(content.createdAt).toLocaleTimeString(
                            undefined,
                            timeOption
                        )}
                    </span>
                </div>
                {/* <img src={item1.src} alt={item1.altText}/> */}
            </div>
            <div className={styles['title-wrapper']}>
                <div
                    className={`${styles.title}`}
                    key={index + 'divTitleCon'}
                >
                    {content.title}
                </div>
                <div
                    className={`${styles.content}`}
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />
                <div className={styles['title-tags']}>
                    {content.tags.map((tagName, index) =>
                        <Tag key={index} tagName={tagName} />
                    )}
                </div>
            </div>
        </NavigateContainer>
    );
}

export default ConnectContent;