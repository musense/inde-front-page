import React, { useEffect, useRef, useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";

import styles from "./index.module.css"

import { getTitleContents } from "assets/js/titleContents";
import { getTagsContents } from "assets/js/tagContents";

import { Outlet, useLocation } from "react-router-dom";
import DarkFooter from "components/Footers/DarkFooter";
import ScrollTopButton from "components/ScrollToTopButton/ScrollTopButton";
// import FixedToTopBtn from "./index-sections/FixedToTopBtn";
function Index() {

  const mounted = useRef();
  const location = useLocation()
  const [_titleContents_, setTitleContents] = useState(null);
  const [_tagContents_, setTagContents] = useState(null);

  // let displayBtn = false


  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getTitleContents()
        .then((titleContents) => {
          // console.log(titleContents);
          setTitleContents(titleContents)
        })
      getTagsContents()
        .then(tags => tags.filter(tag => tag.showOnPage === 'true'))
        .then(tags => {
          setTagContents(tags)
        })
    } 
  }, [mounted,]);

  return (
    <div id="topSection">
      <IndexNavbar />
      <Outlet context={{ contents: _titleContents_, tags: _tagContents_ }} />
      {
        location.pathname === "/"
          ? <DarkFooter tags={_tagContents_} />
          : <DarkFooter tags={[]} />
      }
      <ScrollTopButton />
    </div>
  );
}

export default Index;
