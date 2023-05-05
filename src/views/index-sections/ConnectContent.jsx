import React from "react";

import styles from './tagContentPage.module.css';
import Tag from './Tag';
import NavigateContainer from "./NavigateContainer";
import DateTimeStamp from "components/Date/DateTimeStamp";


function ConnectContent({ index, content, item1=null, category }) {
// console.log("🚀 ~ file: ConnectContent.jsx:20 ~ ConnectContent ~ content:", content)

    return (
        <NavigateContainer
            key={index}
            index={index}
            contentID={content._id}
            customClassName={"connect-container"}
            category={category}
        >
            <div className={styles['title-mainImage']}>
               
                <img width='100%' height='100%' src={content.homeImagePath} alt={content.altText}/>
            </div>
            <div className={styles['title-wrapper']}>
                <div
                    className={`${styles.title}`}
                    key={index + 'divTitleCon'}
                >
                    {content.title}
                </div>
                <DateTimeStamp date={content.createdAt} />
                {/* <div
                    className={`${styles.content}`}
                    dangerouslySetInnerHTML={{ __html: content.content }}
                /> */}
                {/* <div className={styles['title-tags']}>
                    {content.tags.length !== 0 && content.tags.map((tagName, index) =>
                        <Tag key={index} tagName={tagName} />
                    )}
                </div> */}
            </div>
        </NavigateContainer>
    );
}

export default ConnectContent;


