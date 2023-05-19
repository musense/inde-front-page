import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import styles from './../index-sections/category.module.css';
import IndexDecorationImage from "components/IndexDecorationImage/IndexDecorationImage";
import ConnectContent from 'components/ConnectContent/ConnectContent';

import { getTitleContentsByCategory } from "assets/js/titleContents";

import PageTemplate from "components/page/pageTemplate";
import DecoBackground from "components/DecoBackground/DecoBackground";
import Banner from '../../components/Banner/Banner';

import { animateScroll as scroll } from "react-scroll";

import { TitleContext } from 'views/Index';
import useShowHeader from 'hook/useShowHeader';

function Category() {


  const [state, dispatch] = useContext(TitleContext)

  const [showHeader, headerForceHide] = useShowHeader();

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


  const scrollToTop = useCallback(() => {
    scroll.scrollTo(0, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [])

  const scrollToPosition = useCallback(() => {
    if (!state.clientWidth) return
    let top = 402
    if (state.clientWidth < 400)
      top = 240
    scroll.scrollTo(top, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [state.clientWidth])


  const navigate = useNavigate()

  const bannerRef = useRef()

  console.log("🚀 ~ file category.jsx:21 ~ Category ~ state:", state)

  const [__ALL_CONTENT__, setAllContent] = useState(null);
  const [viewContents, setViewContents] = useState(null);

  // const currentPageRef = useRef(1);
  // const [currPage, setCurrPage] = useState(currentPageRef.current);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { categoryName } = useParams();



  useEffect(() => {
    scrollToTop()
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


    console.log("🚀 ~ file category.jsx:95 ~ Category ~ categoryName:", categoryName)
    async function getTitleContentsByCategoryAsync() {
      const payload = {
        categoryName,
        page: 1
      };
      const res = await getTitleContentsByCategory(payload)
      const { data, currentPage, limit, totalCount, totalPages } = res;
      console.log("🚀 ~ file category.jsx:67 ~ useEffect ~ res:", res);

      setAllContent(data);
      setCurrPage(1);
      setTotalPages(Math.ceil(data.length / 6));
    }
    getTitleContentsByCategoryAsync()

  }, [categoryName, dispatch, scrollToTop, state.clientWidth]);

  useMemo(() => {
    if (__ALL_CONTENT__) {
      const start = 0 + (currPage - 1) * 6,
        end = currPage * 6;
      setViewContents(__ALL_CONTENT__.slice(start, end))
    }
  }, [__ALL_CONTENT__, currPage])


  const goPreviousPage = useCallback(() => {
    setCurrPage(page => parseInt(page) - 1)
    scrollToPosition()
  }, [scrollToPosition])

  const goNextPage = useCallback(() => {
    setCurrPage(page => parseInt(page) + 1)
    scrollToPosition()
  }, [scrollToPosition])

  const setPage = useCallback((page) => {
    setCurrPage(parseInt(page))
    scrollToPosition()
  }, [scrollToPosition])

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
  }, [currPage, goNextPage, goPreviousPage, setPage, state.clientWidth, totalPages])
  return (
    <>

      <Banner ref={bannerRef} category={categoryName} />
      <div id="categoryName" className={`${styles['category-name']} title`}>
        {categoryName}
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
          imageType={'line'} />
      </div>

      {viewContents && (<div className={`${styles['main-content']}`}>
        <Background />

        {viewContents.map((content, index) =>
          <ConnectContent key={index} index={index} content={content} category={categoryName} />
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

export default Category;




