import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
// core components

import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';

import { useOutletContext } from 'react-router-dom';
import ContentPageLeft from './ContentPageLeft';
import ContentPageConnect from './ContentPageConnect';
import ContentPageRight from './ContentPageRight';
import { getTitleContents } from "../../assets/js/titleContents";
import useScrollToTop from "../../components/hook/useScrollToTop";


// const item0 = {
//   src: require('assets/img/bg1.png'),
//   altText: 'Nature, United States',
// };

function ContentPage() {
  useScrollToTop();

  const { contents, tags } = useOutletContext();
  const [_titleContents_, setTitleContents] = useState(null);
  const [_theContent_, setTheContent] = useState(null);
  const [prevID, setPrevID] = useState(null);
  const [nextID, setNextID] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const findOneByIdAndReturnPrevNextID = (arr = [], id = null) => {
    if (id === null || typeof id !== 'string') return null;
    const theIndex = arr.findIndex((item) => item._id === id);
    const theContent = arr[theIndex];
    const prevID = theIndex === 0 ? null : arr[theIndex - 1]._id;
    const nextID = theIndex === arr.length - 1 ? null : arr[theIndex + 1]._id;
    setTitleContents(arr);
    setTheContent(theContent);
    setPrevID(prevID)
    setNextID(nextID)
  };


  function goToContent(contentID) {
    if (contentID === null) return
    navigate(`/content/${contentID}`)
  }

  useEffect(() => {
    if (contents !== null) {
      findOneByIdAndReturnPrevNextID(contents, id);
    } else {
      getTitleContents()
        .then((titleContents) => {
          findOneByIdAndReturnPrevNextID(titleContents, id);
        })
      navigate('/');
    }
  }, [id]);


  return (
    <>
      <div className={`section ${styles.section}`}>
        {/* <img
          src={item0.src}
          alt={item0.altText}
        /> */}
      </div>
      <IndexDecorationImage imageType={'cut'} />
      <div className={styles['content-page']}>
        {_theContent_ && <ContentPageLeft
          content={_theContent_}
          prevID={prevID}
          nextID={nextID}
          goToContent={goToContent}
        />}
        {tags && <ContentPageRight tags={tags} />}
      </div>
      <IndexDecorationImage imageType={'connect'} />

      <div className={styles['connect-flex-site']}>
        {_titleContents_ && (
          <ContentPageConnect
            contents={_titleContents_}
          />
        )}
      </div>
    </>
  );
}

export default ContentPage;
