import React, { useEffect, useState, useReducer, useContext } from 'react';


import { useParams } from 'react-router-dom';
// core components
import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';

import ContentPageLeft from './ContentPageLeft';
import { getTitleContentsByID, getRelatedArticles, getTitleContents } from "assets/js/titleContents";
import useScrollToTop from "components/hook/useScrollToTop";

import InterestedContents from './InterestedContents';

import { TitleContext } from "views/Index";

const item = {
  src: '/img/content/banner.png',
  altText: 'The most popular games in India',
  title: 'The most popular games in India',
};
function ContentPage() {
  useScrollToTop(664);

  const [state, dispatch] = useContext(TitleContext);
  console.log("🚀 ~ file: ContentPage.jsx:26 ~ ContentPage ~ state:", state)

  const [_theContent_, setTheContent] = useState(null);
  const [prevInfo, setPrevInfo] = useState(null);
  const [nextInfo, setNextInfo] = useState(null);
  const [interestedContents, setInterestedContents] = useState(null);

  const { categoryName, id } = useParams();

  const findOneByIdAndReturnPrevNextID = (arr = [], serialNumber = null) => {

    if (arr.length === 0) return null
    if (serialNumber === null || typeof serialNumber !== 'number') return null;
    const mapContentInto = (content) => content && ({
      _id: content._id,
      title: content.title,
    })

    const prevContent = arr.find(a => a.serialNumber === serialNumber + 1)
    const nextContent = arr.find(a => a.serialNumber === serialNumber - 1)

    const prevInfo = prevContent ? mapContentInto(prevContent) : null
    const nextInfo = nextContent ? mapContentInto(nextContent) : null

    console.log("🚀 ~ file: ContentPage.jsx:69 ~ findOneByIdAndReturnPrevNextID ~ prevInfo:", prevInfo)
    console.log("🚀 ~ file: ContentPage.jsx:69 ~ findOneByIdAndReturnPrevNextID ~ nextInfo:", nextInfo)
    setPrevInfo(prevInfo)
    setNextInfo(nextInfo)
  };


  useEffect(() => {

    async function getTitleContentsByIDAsync() {
      const payload = {
        _id: id,
      }
      const theContent = await getTitleContentsByID(payload);
      console.log("🚀 ~ file: ContentPage.jsx:60 ~ getTitleContentsByIDAsync ~ theContent:", theContent)
      setTheContent(theContent);
      // const { data } = titleContents
      if (state.contents === null) {
        const res = await getTitleContents();
        console.log("🚀 ~ file: ContentPage.jsx:74 ~ getTitleContentsByIDAsync ~ res:", res)
        const { data } = res
        findOneByIdAndReturnPrevNextID(data, theContent.serialNumber);
        dispatch({
          type: 'SET_ALL_CONTENTS',
          payload: data
        })
      } else {
        findOneByIdAndReturnPrevNextID(state.contents, theContent.serialNumber);
      }

      const interestedContents = await getRelatedArticles(payload)
      setInterestedContents(interestedContents.slice(0, 6))
    }
    getTitleContentsByIDAsync()

  }, [id]);



  return (
    <>
      <div className={`section ${styles.section}`}>
        <img src={item.src} alt={item.altText} title={item.title} />
      </div>


      <ContentPageLeft
        content={_theContent_}
        prevInfo={prevInfo}
        nextInfo={nextInfo}
        category={categoryName}
      />
      <IndexDecorationImage
        marginTop={66}
        marginBottom={52}
        imageType={'line'}
      />

      <InterestedContents
        interestedContents={interestedContents} />
    </>
  );
}

export default ContentPage;




