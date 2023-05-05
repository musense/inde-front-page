import { useEffect } from "react";

export default function useScrollToTop(top = 0) {


    useEffect(() => {
        window.scrollTo(0, top)
    })
}
