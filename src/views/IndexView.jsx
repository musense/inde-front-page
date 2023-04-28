import useScrollToTop from "./../components/hook/useScrollToTop";
import React from "react";
import { useOutletContext } from "react-router-dom";
import Carousel from "./index-sections/Carousel";

import IndexDecorationImage from "./index-sections/IndexDecorationImage";
import NewTitles from "./index-sections/NewTitles";
import RecommendTitles from "./index-sections/RecommendTitles";

function IndexView() {
    // useScrollToTop();
    const { contents, tags } = useOutletContext()

    return (
        <>
            <Carousel />
            <IndexDecorationImage imageType={'cut'} />
            {contents && <NewTitles contents={contents} />}
            <IndexDecorationImage imageType={'recommend'} />
            {contents && <RecommendTitles contents={contents} />}
        </>
    );
}

export default IndexView;