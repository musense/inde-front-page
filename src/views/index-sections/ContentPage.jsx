import React, { useEffect, useState, useReducer, useContext, useRef } from 'react';


import { useParams } from 'react-router-dom';
// core components
import styles from './contentPage.module.css';
import IndexDecorationImage from "components/IndexDecorationImage/IndexDecorationImage";

import ContentPageLeft from './ContentPageLeft';
import { getTitleContentsByID, getRelatedArticles, getTitleContents } from "assets/js/titleContents";
import useScrollToTop from "hook/useScrollToTop";

import InterestedContents from './InterestedContents';

import { TitleContext } from "views/Index";


const mobileItem = {
  src: '/img/mobile/index/banner.png',
  altText: 'The most popular games in India',
  title: 'The most popular games in India',
};
const pcItem = {
  src: '/img/index/banner.png',
  altText: 'The most popular games in India',
  title: 'The most popular games in India',
};


function ContentPage() {
  useScrollToTop(664);

  const [item, setItem] = useState();
  const [state, dispatch] = useContext(TitleContext);
  console.log("🚀 ~ file ContentPage.jsx:26 ~ ContentPage ~ state:", state)

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
    //* basically, the bigger the serialNumber is, the newer the editor is
    const prevContent = arr.find(a => a.serialNumber === serialNumber - 1)
    const nextContent = arr.find(a => a.serialNumber === serialNumber + 1)

    const prevInfo = prevContent ? mapContentInto(prevContent) : null
    const nextInfo = nextContent ? mapContentInto(nextContent) : null

    console.log("🚀 ~ file ContentPage.jsx:69 ~ findOneByIdAndReturnPrevNextID ~ prevInfo:", prevInfo)
    console.log("🚀 ~ file ContentPage.jsx:69 ~ findOneByIdAndReturnPrevNextID ~ nextInfo:", nextInfo)
    setPrevInfo(prevInfo)
    setNextInfo(nextInfo)
  };

  useEffect(() => {
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
    } else {
        console.log("🚀 ~ file: ContentPage.jsx:71 ~ useEffect ~ state.clientWidth:", state.clientWidth)

        if (state.clientWidth < 400) {

          setItem({ ...mobileItem })
        } else {
          setItem({ ...pcItem })
        }
    }

    async function getTitleContentsByIDAsync() {
      const payload = {
        _id: id,
      }
      const theContent = await getTitleContentsByID(payload);
      console.log("🚀 ~ file ContentPage.jsx:60 ~ getTitleContentsByIDAsync ~ theContent:", theContent)
      setTheContent(theContent);
      // const { data } = titleContents

      if (state.contents === null) {
        const res = await getTitleContents();
        console.log("🚀 ~ file ContentPage.jsx:74 ~ getTitleContentsByIDAsync ~ res:", res)
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

  }, [dispatch, id, state.clientWidth, state.contents]);



  return (
    <>
      {item && (
        <div className={`section ${styles.section}`}>
          <a href={'https://zoobet168.com/'} target="_blank" rel="noopener noreferrer" />
          <img src={item.src} alt={item.altText} title={item.title} width={'100%'} />
        </div>)
      }


      <ContentPageLeft
        content={_theContent_}
        prevInfo={prevInfo}
        nextInfo={nextInfo}
        category={categoryName}
      />

      <div className={styles['contentPage-decoration-image-wrapper-pc']}>
        <IndexDecorationImage
          marginTop={66}
          marginBottom={52}
          imageType={'line'} />
      </div>

      <InterestedContents
        interestedContents={interestedContents} />

      <div className={styles['contentPage-decoration-image-wrapper-mobile']}>
        <IndexDecorationImage
          marginTop={'2rem'}
          marginBottom={'2rem'}
          imageType={'line'} />
      </div>
    </>
  );
}

export default ContentPage;




