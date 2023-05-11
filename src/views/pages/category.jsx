import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import styles from './../index-sections/category.module.css';
import IndexDecorationImage from "components/IndexDecorationImage/IndexDecorationImage";
import ConnectContent from 'components/ConnectContent/ConnectContent';

import { getTitleContentsByCategory } from "assets/js/titleContents";
import useScrollToTop from "hook/useScrollToTop";
import PageTemplate from "components/page/pageTemplate";
import DecoBackground from "components/DecoBackground/DecoBackground";
import Banner from '../../components/Banner/Banner';


import { TitleContext } from "views/Index";

function Category() {
  // useScrollToTop();
  const navigate = useNavigate()

  const bannerRef = useRef()

  const [state, dispatch] = useContext(TitleContext);
  console.log("🚀 ~ file category.jsx:21 ~ Category ~ state:", state)

  const [__ALL_CONTENT__, setAllContent] = useState(null);
  const [viewContents, setViewContents] = useState(null);

  // const currentPageRef = useRef(1);
  // const [currPage, setCurrPage] = useState(currentPageRef.current);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { categoryName } = useParams();

  useEffect(() => {

    window.scrollTo(0, 1);

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

  }, [categoryName, state.clientWidth]);

  useMemo(() => {
    if (__ALL_CONTENT__) {
      const start = 0 + (currPage - 1) * 6,
        end = currPage * 6;
      setViewContents(__ALL_CONTENT__.slice(start, end))
    }
  }, [__ALL_CONTENT__, currPage])


  const goPreviousPage = () => {
    // currentPageRef.current -= 1
    // setCurrPage(currentPageRef.current)
    setCurrPage(page => parseInt(page) - 1)
    // navigate(`${localStorage.getItem('pathname')}#categoryName`)
  }

  const goNextPage = () => {
    // currentPageRef.current += 1
    // setCurrPage(currentPageRef.current)
    setCurrPage(page => parseInt(page) + 1)
    // navigate(`${localStorage.getItem('pathname')}#categoryName`)
  }

  const setPage = (page) => {
    // currentPageRef.current = parseInt(page)
    // setCurrPage(currentPageRef.current)
    setCurrPage(parseInt(page))
    // navigate(`${localStorage.getItem('pathname')}#categoryName`)
  }

  return (
    <>
      <DecoBackground type={'category'} />
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
        {viewContents.map((content, index) =>
          <ConnectContent key={index} index={index} content={content} category={categoryName} />
        )}
      </div>
      )}

      {state.clientWidth < 400 ? (
        <PageTemplate
          prevPage={goPreviousPage}
          nextPage={goNextPage}
          setPage={setPage}
          currentPage={currPage}
          totalPages={totalPages}
          maxShowNumbers={3}
        />
      ) : (
        <PageTemplate
          prevPage={goPreviousPage}
          nextPage={goNextPage}
          setPage={setPage}
          currentPage={currPage}
          totalPages={totalPages}
          maxShowNumbers={5}
        />
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




