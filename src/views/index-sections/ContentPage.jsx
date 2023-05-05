import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
// core components

import styles from './contentPage.module.css';
import IndexDecorationImage from './IndexDecorationImage';

import { useOutletContext } from 'react-router-dom';
import ContentPageLeft from './ContentPageLeft';
import ContentPageConnect from './ContentPageConnect';
import ContentPageRight from './ContentPageRight';
import { getTitleContents, geRelatedArticles } from "../../assets/js/titleContents";
import useScrollToTop from "../../components/hook/useScrollToTop";

import DecoBackground from "components/DecoBackground";
import InterestedContents from './InterestedContents';
const item = {
  src: '/public/img/content/banner.png',
  altText: 'The most popular games in India',
  title: 'The most popular games in India',
};
function ContentPage() {
  useScrollToTop(664);

  const { contents, tags } = useOutletContext();
  const [_titleContents_, setTitleContents] = useState(null);
  const [_theContent_, setTheContent] = useState(null);
  const [prevID, setPrevID] = useState(null);
  const [prevTitle, setPrevTitle] = useState(null);
  const [nextID, setNextID] = useState(null);
  const [nextTitle, setNextTitle] = useState(null);

  const [interestedContents, setInterestedContents] = useState(null);


  const navigate = useNavigate();
  const { categoryName, id } = useParams();
  console.log("🚀 ~ file: ContentPage.jsx:33 ~ ContentPage ~ id:", id)
  console.log("🚀 ~ file: ContentPage.jsx:33 ~ ContentPage ~ categoryName:", categoryName)





  const findOneByIdAndReturnPrevNextID = (arr = [], id = null) => {
    if (id === null || typeof id !== 'string') return null;
    const theIndex = arr.findIndex((item) => item._id === id);
    const theContent = arr[theIndex];
    const { _id: prevID, title: prevTitle } = theIndex === 0 ? { _id: '', title: '' } : arr[theIndex - 1];
    const { _id: nextID, title: nextTitle } = theIndex === arr.length - 1 ? { _id: '', title: '' } : arr[theIndex + 1];
    setTitleContents(arr.sort((a1, a2) => new Date(a2.date) - new Date(a1.date)));
    setTheContent(theContent);
    setPrevID(prevID)
    setPrevTitle(prevTitle)
    setNextID(nextID)
    setNextTitle(nextTitle)
  };



  useEffect(() => {
    if (contents !== null) {
      findOneByIdAndReturnPrevNextID(contents, id);
      geRelatedArticles({ _id: id })
        .then((interestedContents) => {
          console.log("🚀 ~ file: ContentPage.jsx:65 ~ .then ~ interestedContents:", interestedContents)

          setInterestedContents(interestedContents.slice(0, 6))
        })
    } else {
      getTitleContents()
        .then((titleContents) => {
          const { data } = titleContents
          findOneByIdAndReturnPrevNextID(data, id);
        })

      navigate('/');
    }
  }, [id]);



  return (
    <>
      <DecoBackground type={'content'} />
      <div className={`section ${styles.section}`}>
        <img src={item.src} alt={item.altText} title={item.title} />
      </div>


      <ContentPageLeft
        content={_theContent_}
        prevID={prevID}
        prevTitle={prevTitle}
        nextID={nextID}
        nextTitle={nextTitle}
        category={categoryName}
      />)
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




