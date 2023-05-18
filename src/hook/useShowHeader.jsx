import { useEffect, useRef, useState, useContext, useMemo } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import debounce from 'services/debounce'

import { TitleContext } from '../views/Index.jsx';

export default function useShowHeader() {

    const [state, dispatch] = useContext(TitleContext)
    const clientWindowWidth = state.clientWidth
    console.log("🚀 ~ file: useShowHeader.jsx:12 ~ useShowHeader ~ clientWindowWidth:", clientWindowWidth)

    const headerForceHide = () => {
        forceHideRef.current = true
        setShowHeader(false)
    }
    const headerRestore = () => {
        // console.log('!!!!!!!!!!!!headerRestore scroll end!!!!!!!!!!!!');
        forceHideRef.current = false
    }
    const offset = useMemo(() => {
        let offset = 153
        if (!clientWindowWidth) return
        if (clientWindowWidth < 400) {
            offset = 96
        }
        return offset
    }, [clientWindowWidth])
    const forceHideRef = useRef(false);
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', debounce(headerRestore))
    }, [])

    useScrollPosition(({ prevPos, currPos }) => {
        // console.group("🚀 ~ file: useShowHeader.jsx:14 ~ useScrollPosition ~ useScrollPosition")
        // console.log("🚀 ~ file: useShowHeader.jsx:14 ~ useScrollPosition ~ currPos:", currPos.y)
        // console.log("🚀 ~ file: useShowHeader.jsx:14 ~ useScrollPosition ~ prevPos:", prevPos.y)
        // console.groupEnd("🚀 ~ file: useShowHeader.jsx:14 ~ useScrollPosition ~ useScrollPosition")

        if (forceHideRef.current) return
        if (clientWindowWidth < 768 && -prevPos.y < offset) return
        const isShow = currPos.y > prevPos.y
        if (isShow !== showHeader) setShowHeader(isShow);
    },
        [showHeader],
        false,
        false,
        100
    );

    return [showHeader, headerForceHide]
}
