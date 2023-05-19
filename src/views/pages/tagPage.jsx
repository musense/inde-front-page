import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';
// core components

import styles from './../index-sections/category.module.css';
import IndexDecorationImage from "components/IndexDecorationImage/IndexDecorationImage";
import ConnectContent from 'components/ConnectContent/ConnectContent';

// import ContentPageLeft from '../index-sections/ContentPageLeft';
// import ContentPageConnect from '../index-sections/ContentPageConnect';
// import ContentPageRight from '../index-sections/ContentPageRight';
import { getTagsContents } from "assets/js/tagContents";

import PageTemplate from "components/page/pageTemplate";
import DecoBackground from "components/DecoBackground/DecoBackground";
import Banner from 'components/Banner/Banner';

import { animateScroll as scroll } from "react-scroll";

import { TitleContext } from 'views/Index';

function TagPage() {


  const [state, dispatch] = useContext(TitleContext)

  const { tag } = useParams();
  const [__ALL_CONTENT__, setAllContent] = useState(null);
  const [viewContents, setViewContents] = useState(null);
  const currentPageRef = useRef(1);
  const tagNameRef = useRef(tag)
  const [currPage, setCurrPage] = useState(currentPageRef.current);
  const [totalPages, setTotalPages] = useState(1);



  const scrollToPosition = useCallback(() => {
    if (!state.clientWidth) return
    let top = 401
    if (state.clientWidth < 400)
      top = 240
    scroll.scrollTo(top, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [state.clientWidth])

  useEffect(() => {
    scrollToPosition()
    if (!state.clientWidth) {
      dispatch({
        type: 'SET_WINDOW_SIZE',
        payload: {
          width: window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth,
          height: window.innerHeight || document.documentElement.clientHeight ||
            document.body.clientHeigh
        }
      })
    }
  }, [state.clientWidth, dispatch, scrollToPosition]);
  const Background = useCallback(() => {
    if (state.clientWidth < 400) {
      return <DecoBackground
        repeat={'repeat'}
        position={'fixed'}
        offset={'0.2rem'}
      />
    } else {
      return (<DecoBackground
        repeat={'repeat'}
        position={'absolute'}
      />)
    }
  }, [state.clientWidth])

  const Page = useCallback(() => {
    if (state.clientWidth < 400) {
      return <PageTemplate
        prevPage={goPreviousPage}
        nextPage={goNextPage}
        setPage={setPage}
        currentPage={currPage}
        totalPages={totalPages}
        maxShowNumbers={3}
      />
    } else {
      return <PageTemplate
        prevPage={goPreviousPage}
        nextPage={goNextPage}
        setPage={setPage}
        currentPage={currPage}
        totalPages={totalPages}
        maxShowNumbers={5}
      />
    }
  }, [currPage, state.clientWidth, totalPages])

  useEffect(() => {
    const payload = {
      tagName: tag,
      page: currentPageRef.current
    }

    payload && getTagsContents(payload)
      .then(res => {
        const { data, currentPage, limit, totalCount, totalPages } = res
        console.log("🚀 ~ file category.jsx:67 ~ useEffect ~ res:", res)

        setAllContent(data);
        setCurrPage(currentPageRef.current);
        setTotalPages(Math.ceil(data.length / 6));
        // setTotalPages(totalPages);
      })


    // getTitleContentsByCategory(payload)
    //   .then((titleContents) => {

    //     console.log("🚀 ~ file TagContentsPage.js:40 ~ .then ~ titleContents:", titleContents)
    //     setAllContent(titleContents);
    //     if (titleContents.length > 6) {
    //       setViewContents(titleContents.slice(0, 6))
    //     }
    //   });
  }, [tag]);

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

      <Banner />
      <div className={`${styles['category-name']} title`}>
        #&nbsp;{tag}
      </div>
      <div id="category-anchor" />

      <div className={styles['category-decoration-image-wrapper']}>
        <IndexDecorationImage
          marginTop={44}
          marginBottom={96}
          imageType={'line'} />
        <IndexDecorationImage
          marginTop={'2rem'}
          marginBottom={'2rem'}
          imageType={'line'}
        />
      </div>

      {viewContents && (<div className={`${styles['main-content']}`}>
        <Background />

        {viewContents.map((content, index) =>
          <ConnectContent key={index} index={index} content={content} category={tag} />
        )}

        <Page />
      </div>
      )}



      <div className={styles['category-decoration-image-wrapper']}>
        <IndexDecorationImage
          marginTop={73}
          marginBottom={83}
          imageType={'line'} />
        <IndexDecorationImage
          marginTop={'2rem'}
          marginBottom={'2rem'}
          imageType={'line'}
        />
      </div>

    </>
  );
}

export default TagPage;




