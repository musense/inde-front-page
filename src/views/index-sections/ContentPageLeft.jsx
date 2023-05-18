import React, { useCallback, useContext, useEffect } from "react";
import Tag from "components/Tag/Tag";
import { Link } from "react-router-dom";
import GoToContentPage from "components/page/goToContentPage";
import styles from './contentPageLeft.module.css'
import DecoBackground from "components/DecoBackground/DecoBackground";
import IndexDecorationImage from "components/IndexDecorationImage/IndexDecorationImage";
// import DateTimeStamp from "components/Date/DateTimeStamp";

import { TitleContext } from "views/Index"

const item = {
  src: '/img/content/image.png',
  altText: `The Events You Can't Miss in Cricket This Year | All You Need to Know About Cricket`,
};

function ContentPageLeft({
  content,
  prevInfo,
  nextInfo,
  category }) {

  const [state, dispatch] = useContext(TitleContext)
  return content && (
    <div className={styles['content-page']}>

      <div className={styles['left-content']}>
        {
          state.clientWidth > 400
            ? (<DecoBackground type={'content'} />)
            : (<DecoBackground type={'category'} />)
        }


        <div className={styles['title-view']}>
          <Link className={styles['main-title-decoration']} to={`/c/${content.categories.name}`}>Return</Link>
          <div className={styles['contentPageLeft-decoration-image-wrapper']}>
            <IndexDecorationImage
              marginTop={'2rem'}
              marginBottom={'2rem'}
              imageType={'line'} />
          </div>
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
          {/* 
          <div className={styles['contentPageLeft-decoration-image-wrapper']}>
            <IndexDecorationImage
              marginTop={66}
              marginBottom={52}
              imageType={'line'}
            />
            <IndexDecorationImage
              marginTop={'0rem'}
              marginBottom={'0rem'}
              imageType={'line'} />
          </div> */}

          <div className={styles['content-side']}>
            <a href={'https://zoobet168.com/'} target="_blank" rel="noopener noreferrer" >
              <div className={styles['content-advertise']} />
            </a>
            <div className={styles['content-tags']}>
              <div>Tag</div>
              <div>
                {content.tags.map((tag, index) =>
                  <Tag key={index} tag={tag} />
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ContentPageLeft;

