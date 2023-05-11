/*eslint-disable*/
import React from "react";
import { useLocation } from "react-router-dom";
// import Tag from "views/index-sections/Tag";

import styles from "./darkFooter.module.css";
import IndexDecorationImage from "components/IndexDecorationImage/IndexDecorationImage";

function DarkFooter() {

  const location = useLocation()
  console.log("🚀 ~ file DarkFooter.jsx:12 ~ DarkFooter ~ location:", location)

  let footerClassName,
    copyrightClassName;
  if (location.pathname === "/") {
    footerClassName = "index"
    copyrightClassName = "index"
  }
  else if (location.pathname.startsWith('/c/') && location.pathname.indexOf('/p/') === -1) {
    footerClassName = "category"
    copyrightClassName = "not-index"
  }
  else {
    footerClassName = "not-index"
    copyrightClassName = "not-index"
  }

  return (
    <>
      {footerClassName === 'index' && (
        <div className={styles['index-footer']}>
          <IndexDecorationImage
            imageType='thin-line'
            marginTop={'-5rem'}
            marginBottom={'auto'}
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

        <div className={styles['footer-decoration-image-wrapper']}>
          <IndexDecorationImage
            imageType={'thin-line'}
            marginTop={49}
            marginBottom={15}
          />
          <IndexDecorationImage
            position={`${footerClassName === 'index' ? 'relative' : 'absolute'}`}
            imageType={`${footerClassName === 'index' ? 'thin-line' : 'line'}`}
            marginTop={`${footerClassName === 'index' ? 49 : 'unset'}`}
            marginBottom={`${footerClassName === 'index' ? 15 : '-3rem'}`}
          />
        </div>

      </footer>
      <div className={`${styles.copyright} ${styles[copyrightClassName]}`}>
        ©2023 Zoonobet All rights reserved
      </div>
    </>
  );
}

export default DarkFooter;
