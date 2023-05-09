import React from "react";
import Tag from "components/Tag/Tag";
import { Link } from "react-router-dom";
import GoToContentPage from "components/page/goToContentPage";
import styles from './contentPageLeft.module.css'
import DecoBackground from "components/DecoBackground/DecoBackground";
// import DateTimeStamp from "components/Date/DateTimeStamp";

const item = {
  src: '/img/content/image.png',
  altText: `The Events You Can't Miss in Cricket This Year | All You Need to Know About Cricket`,
};

function ContentPageLeft({
  content,
  prevInfo,
  nextInfo,
  category }) {

  return content && (
    <div className={styles['content-page']}>

      <div className={styles['left-content']}>
        <DecoBackground type={'content'} />
        <div className={styles['title-view']}>
          <Link className={styles['main-title-decoration']} to={`/c/${content.categories.name}`}>Return</Link>
          <h1 className={styles['main-title']}>{content.title}</h1>
        </div>
        <div className={styles['main-content']}>
          {/* <img
        className={styles['title-main-image']}
        src={item.src}
        alt={item.altText}
        title={item.altText}
      /> */}
          <div>
            <div
              className={styles['title-main-content']}
              dangerouslySetInnerHTML={{ __html: content.htmlContent }}
            />
            {(prevInfo || nextInfo) && <GoToContentPage
              categoryName={content.categories.name}
              prevInfo={prevInfo}
              nextInfo={nextInfo}
            />}
          </div>


          <div className={styles['content-side']}>
            <div className={styles['content-advertise']}></div>
            <div className={styles['content-tags']}>
              <div>Tag</div>
              {content.tags.map((tag, index) =>
                <Tag key={index} tag={tag} />
              )}
            </div>
          </div>
          {/* <DateTimeStamp date={content.createdAt} /> */}
        </div>

      </div>
    </div>
  );
}

export default ContentPageLeft;

