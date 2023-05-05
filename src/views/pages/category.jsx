import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
// core components

import styles from './../index-sections/category.module.css';
import IndexDecorationImage from '../index-sections/IndexDecorationImage';
import ConnectContent from './../index-sections/ConnectContent';

// import { useOutletContext } from 'react-router-dom';
// import ContentPageLeft from '../index-sections/ContentPageLeft';
// import ContentPageConnect from '../index-sections/ContentPageConnect';
// import ContentPageRight from '../index-sections/ContentPageRight';
import { getTitleContentsByCategory } from "assets/js/titleContents";
import useScrollToTop from "components/hook/useScrollToTop";
import PageTemplate from "components/page/pageTemplate.jsx";
import DecoBackground from "components/DecoBackground";


// const MemoPage = React.memo(PageTemplate)

const item = {
  src: '/public/img/category/banner.png',
  altText: 'Best Information Zoonobet',
  title: 'Best Information Zoonobet',
};

function Category() {
  useScrollToTop(404);

  const { contents, tags } = useOutletContext();
  const [__ALL_CONTENT__, setAllContent] = useState(null);
  const [viewContents, setViewContents] = useState(null);

  const [prevID, setPrevID] = useState(null);
  const [nextID, setNextID] = useState(null);
  const currentPageRef = useRef(1);
  const [currPage, setCurrPage] = useState(currentPageRef.current);
  const [totalPages, setTotalPages] = useState(1);


  // const navigate = useNavigate();
  // console.log("🚀 ~ file: category.jsx:33 ~ Category ~ categoryName:", categoryName)

  // const findOneByIdAndReturnPrevNextID = (arr = [], categoryName = null) => {
  //   if (categoryName === null || typeof categoryName !== 'string') return null;
  //   const theIndex = arr.findIndex((item) => item._id === categoryName);
  //   const theContent = arr[theIndex];
  //   const prevID = theIndex === 0 ? null : arr[theIndex - 1]._id;
  //   const nextID = theIndex === arr.length - 1 ? null : arr[theIndex + 1]._id;
  //   setTitleContents(arr);
  //   setAllContent(theContent);
  //   setPrevID(prevID)
  //   setNextID(nextID)
  // };
  const { categoryName } = useParams();

  useEffect(() => {
    console.log("🚀 ~ file: category.jsx:95 ~ Category ~ categoryName:", categoryName)
    const payload = {
      categoryName,
      page: currentPageRef.current
    }
    getTitleContentsByCategory(payload)
      .then(res => {
        const { data, currentPage, limit, totalCount, totalPages } = res
        // const mockData = [
        //   ...data,
        //   ...data,
        //   ...data,
        //   ...data,
        //   ...data,
        //   ...data,
        //   ...data,
        // ]
        // console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ currPage:", currPage)
        // console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ data:", mockData)
        // console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ currentPage:", 1)
        // console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ limit:", 6)
        // console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ totalCount:", mockData.length)
        // console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ totalPages:", Math.ceil(mockData.length / 6))
        setAllContent(data);
        setCurrPage(currentPageRef.current);
        // setTotalPages(Math.ceil(data.length / 6));
        setTotalPages(totalPages);
      })


    // getTitleContentsByCategory(payload)
    //   .then((titleContents) => {

    //     console.log("🚀 ~ file: TagContentsPage.js:40 ~ .then ~ titleContents:", titleContents)
    //     setAllContent(titleContents);
    //     if (titleContents.length > 6) {
    //       setViewContents(titleContents.slice(0, 6))
    //     }
    //   });
  }, [categoryName]);

  useMemo(() => {
    if (__ALL_CONTENT__) {
      const start = 0 + (currPage - 1) * 6,
        end = currPage * 6;
      setViewContents(__ALL_CONTENT__.slice(start, end))
    }
  }, [__ALL_CONTENT__, currPage])


  const goPreviousPage = () => {
    currentPageRef.current -= 1
    setCurrPage(currentPageRef.current)
    // setCurrPage(page => parseInt(page) - 1)
  }

  const goNextPage = () => {
    currentPageRef.current += 1
    setCurrPage(currentPageRef.current)
    // setCurrPage(page => parseInt(page) + 1)
  }

  const setPage = (page) => {
    currentPageRef.current = parseInt(page)
    setCurrPage(currentPageRef.current)
    // setCurrPage(parseInt(page))
  }
  return (
    <>
      <DecoBackground type={'category'} />
      <div className={`section ${styles.section}`}>
        <img src={item.src} alt={item.altText} title={item.title} />
      </div>
      <div className={`${styles['category-name']} title`}>
        {categoryName}
      </div>
      <IndexDecorationImage marginTop={44} marginBottom={96} imageType={'line'} />

      {viewContents && (<div className={`${styles['main-content']}`}>
        {viewContents.map((content, index) =>
          <ConnectContent key={index} index={index} content={content} category={categoryName} />
        )}
      </div>
      )}

      <PageTemplate
        prevPage={goPreviousPage}
        nextPage={goNextPage}
        setPage={setPage}
        currentPage={currPage}
        totalPages={totalPages}
        maxShowNumbers={5}
      />

      <IndexDecorationImage marginTop={73} marginBottom={83} imageType={'line'} />
    </>
  );
}

export default Category;




