import React, { useEffect, useMemo, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';

import styles from './../index-sections/category.module.css';
import IndexDecorationImage from '../index-sections/IndexDecorationImage';
import ConnectContent from './../index-sections/ConnectContent';

import { getTitleContentsByCategory } from "assets/js/titleContents";
import useScrollToTop from "components/hook/useScrollToTop";
import PageTemplate from "components/page/pageTemplate";
import DecoBackground from "components/DecoBackground/DecoBackground";
import Banner from '../../components/Banner/Banner';




function Category() {
  useScrollToTop();

  const [__ALL_CONTENT__, setAllContent] = useState(null);
  const [viewContents, setViewContents] = useState(null);

  const currentPageRef = useRef(1);
  const [currPage, setCurrPage] = useState(currentPageRef.current);
  const [totalPages, setTotalPages] = useState(1);

  const { categoryName } = useParams();

  useEffect(() => {
    console.log("🚀 ~ file: category.jsx:95 ~ Category ~ categoryName:", categoryName)
    async function getTitleContentsByCategoryAsync() {
      const payload = {
        categoryName,
        page: currentPageRef.current
      };
      const res = await getTitleContentsByCategory(payload)
      const { data, currentPage, limit, totalCount, totalPages } = res;
      console.log("🚀 ~ file: category.jsx:67 ~ useEffect ~ res:", res);
      setAllContent(data);
      setCurrPage(currentPageRef.current);
      setTotalPages(Math.ceil(data.length / 6));
    }
    getTitleContentsByCategoryAsync()
    
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
      <Banner category={categoryName} />
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




