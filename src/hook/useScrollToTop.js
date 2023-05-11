import { useEffect, useLayoutEffect } from "react";

export default function useScrollToTop(top = 0, skip = false) {
    console.log("🚀 ~ file useScrollToTop.js:4 ~ useScrollToTop ~ skip:", skip)


    useEffect(() => {
        // if (!skip) {
            window.scrollTo(0, top)
        // }
    }, [top, skip])
}
