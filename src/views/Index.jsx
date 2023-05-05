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
  console.log("🚀 ~ file: Index.jsx:18 ~ Index ~ _titleContents_:", _titleContents_)
  const [_tagContents_, setTagContents] = useState(null);

  // let displayBtn = false


  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getTitleContents()
        .then((titleContents) => {
          const { data } = titleContents
          console.log(titleContents);
          console.log("🚀 ~ file: Index.jsx:29 ~ .then ~ data:", data)
          const filteredData = data
            .filter((item) => item.categories && item.categories.name !== 'casino')
          console.log("🚀 ~ file: Index.jsx:31 ~ .then ~ filteredData:", filteredData)
          setTitleContents(filteredData)
        })
      getTagsContents()
        .then(tags => {
          setTagContents(tags)
        })
    }
  }, []);

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
