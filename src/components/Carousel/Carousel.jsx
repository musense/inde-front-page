import React, { useMemo, useContext, useEffect, useState, useRef } from "react";
import styles from './carousel.module.css'
// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl
} from "reactstrap";

import { TitleContext } from "views/Index";

const mobileItem = {
  src: "/img/mobile/index/banner.png",
  altText: "The most popular games in India",
}

const desktopItem = {
  src: "/img/index/banner.png",
  altText: "The most popular games in India",
}
const items = [

  {
    src: "/img/index/background.png",
    altText: "The most popular games in Taiwan",
  },
  {
    src: "/img/index/image_1.png",
    altText: "The most popular games in New York",
  },
  {
    src: "/img/index/image_2.png",
    altText: "The most popular games in Thailand",
  },
  {
    src: "/img/index/image_3.png",
    altText: "The most popular games in Japan",
  },
  {
    src: "/img/index/image_4.png",
    altText: "The most popular games in America",
  },
];


function CarouselSection() {
  const [state, dispatch] = useContext(TitleContext);
  console.log("🚀 ~ file: Carousel.jsx:52 ~ CarouselSection ~ state:", state)

  const carouselRef = useRef(null)
  const [carouselItems, setCarouselItems] = useState(null);
  useEffect(() => {
    if (!state.clientWidth) return

    if (carouselRef.current === null) {
      carouselRef.current = 'carousel'
      if (state.clientWidth > 400) {
        items.splice(0, 0, desktopItem)
      } else {
        items.splice(0, 0, mobileItem)
        console.log("🚀 ~ file: Carousel.jsx:52 ~ useEffect ~ items:", items)
      }
      setCarouselItems(items)
    }
  }, [state.clientWidth]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };



  const slides = useMemo(() => {
    if (!carouselItems) return
    const mappedImages = [...carouselItems];
    return mappedImages.map((item) => {
      return (
        <CarouselItem
          onExiting={onExiting}
          onExited={onExited}
          key={item.src}
          className={styles.carouselItem}
        >
          <a href={'https://zoobet168.com/'} className={styles.carouselAnchor} target="_blank" rel="noopener noreferrer" />
          <img src={item.src} alt={item.altText} className={styles.carouselImg} width={'100%'} />
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>{item.caption}</h5>
          </div> */}
        </CarouselItem>
      );
    });
  }, [carouselItems])

  return carouselItems && (
    <>
      <Carousel
        id={carouselRef}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        className={`${styles.carousel}`}
      >
        <CarouselIndicators
          items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className={styles.indicator} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </>
  );
}

export default CarouselSection;
