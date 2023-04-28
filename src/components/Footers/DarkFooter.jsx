/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tag from "views/index-sections/Tag";

import styles from "./darkFooter.module.css";

function DarkFooter({ tags }) {

  const location = useLocation()
  const [firstRowTags, setFirstRowTags] = useState(null);
  const [secondRowTags, setSecondRowTags] = useState(null);
  const [thirdRowTags, setThirdRowTags] = useState(null);

  let footerClassName;
  if (location.pathname === "/") {
    footerClassName = "index-margin"
  } else if (location.pathname.indexOf('/content/tag') !== -1) {
    footerClassName = "tag-margin"
  } else {
    footerClassName = "content-margin"
  }


  const setTagRows = (start = 0, end = arr.length, arr = []) => {

    if (arr === null) return
    if (arr.length === 0) return
    if (start > arr.length) return
    return arr.slice(start, end)
  }

  useEffect(() => {
    setFirstRowTags(setTagRows(0, 4, tags))
    setSecondRowTags(setTagRows(4, 7, tags))
    setThirdRowTags(setTagRows(7, 11, tags))
  }, [tags]);

  return (
    <footer id="footer" className={`${styles['custom-footer']} ${styles[footerClassName]}`} >
      <nav className={styles['custom-nav']}>
        {firstRowTags && <ul className={styles['custom-ul']}>
          {firstRowTags.map((tag, index) => (
            <li className={styles['custom-li']} key={index}>
              <Tag index={index} tagName={tag.name} />
            </li>
          ))}
        </ul>}
        {secondRowTags && <ul className={styles['custom-ul']}>
          {secondRowTags.map((tag, index) => (
            <li className={styles['custom-li']} key={index}>
              <Tag index={index} tagName={tag.name} />
            </li>
          ))}
        </ul>}
        {thirdRowTags && <ul className={styles['custom-ul']}>
          {thirdRowTags.map((tag, index) => (
            <li className={styles['custom-li']} key={index}>
              <Tag index={index} tagName={tag.name} />
            </li>
          ))}
        </ul>}
      </nav>

      <div className={styles.copyright}>
      Copyright © 2023 KASHINOBI All Rights Reserved.
      </div>
    </footer>
  );
}

export default DarkFooter;
