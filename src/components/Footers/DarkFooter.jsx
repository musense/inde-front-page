/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import Tag from "views/index-sections/Tag";

import styles from "./darkFooter.module.css";
import IndexDecorationImage from "../../views/index-sections/IndexDecorationImage";

function DarkFooter({ tags }) {

  const location = useLocation()
  console.log("🚀 ~ file: DarkFooter.jsx:12 ~ DarkFooter ~ location:", location)
  // const [firstRowTags, setFirstRowTags] = useState(null);
  // const [secondRowTags, setSecondRowTags] = useState(null);
  // const [thirdRowTags, setThirdRowTags] = useState(null);

  let footerClassName;
  if (location.pathname === "/") {
    footerClassName = "index"
  }
  else if (location.pathname.startsWith('/c/') && location.pathname.indexOf('/p/') === -1) {
    footerClassName = "category"
  }
  else {
    footerClassName = "not-index"
  }


  // const setTagRows = (start = 0, end = arr.length, arr = []) => {

  //   if (arr === null) return
  //   if (arr.length === 0) return
  //   if (start > arr.length) return
  //   return arr.slice(start, end)
  // }

  // useEffect(() => {
  // setFirstRowTags(setTagRows(0, 4, tags))
  // setSecondRowTags(setTagRows(4, 7, tags))
  // setThirdRowTags(setTagRows(7, 11, tags))
  // }, [tags]);

  return (
    <>
      {footerClassName === 'index' && (
        <div className={styles['index-footer']}>
          <IndexDecorationImage
            imageType='thin-line'
          // marginTop={72}
          // marginBottom={103}
          />
          <div className={`${styles['footer-header']} title`} style={{ color: `var(--theme-gold)` }}>
            About Zoonobet
          </div>
          <div className={styles['footer-article']} style={{ color: `var(--theme-color)` }}>
            Zoonobet is a website that specializes in providing various gambling game information,
            allowing you to get the latest game news at any time. We carefully select the best and most popular games, including slot machines, table games, lottery, sports betting, and more. We also provide in-depth analysis and gameplay tips for each game!
          </div>
        </div>)}
      <footer id="footer" className={`${styles['custom-footer']} ${styles[footerClassName]}`} >
        <div style={
          footerClassName === 'index'
            ? { color: `var(--theme-red)` }
            : { color: `var(--theme-gold)` }
        } className={`${styles['footer-header']} title`}>
          Our Partner
        </div>
        <div className={styles['footer-body']}>
          <div className={styles['footer-img']}>
            {/* picture */}
          </div>
          <div style={
            footerClassName === 'index'
              ? { color: `var(--theme-red)` }
              : { color: `var(--theme-color)` }
          } className={styles['footer-article']}>
            About Zoobet<br />
            Zoobet is the largest and fastest-growing online casino game platform in India, offering various online games such as lottery, slot machines, sports, and poker, hoping to bring players the richest gaming experience. Zoobet creates a good game ecosystem, providing diverse activities, bonus rewards, and VIP gifts. Currently, it has over 500,000 members and is one of the most popular online casinos in India.
          </div>
        </div>
        <IndexDecorationImage
          imageType='thin-line'
          marginTop={49}
          marginBottom={15}
        />
      </footer>
      <div className={styles.copyright}>
        ©2023 Zoonobet All rights reserved
      </div>
    </>
  );
}

export default DarkFooter;
