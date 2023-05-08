import { useLayoutEffect } from "react";

export default function useScrollToTop(top = 0) {


    useLayoutEffect(() => {
        window.scrollTo(0, top)
    })
}
