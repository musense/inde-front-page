import React, { useMemo } from "react";
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

const items = [
  {
    src: "/public/img/index/banner.png",
    altText: "The most popular games in India",
  },
  {
    src: "/public/img/index/background.png",
    altText: "The most popular games in Taiwan",
  },
  {
    src: "/public/img/index/image_1.png",
    altText: "The most popular games in New York",
  },
  {
    src: "/public/img/index/image_2.png",
    altText: "The most popular games in Thailand",
  },
  {
    src: "/public/img/index/image_3.png",
    altText: "The most popular games in Japan",
  },
  {
    src: "/public/img/index/image_4.png",
    altText: "The most popular games in America",
  },
];


function CarouselSection() {
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
    return items.map((item) => {
      return (
        <CarouselItem
          onExiting={onExiting}
          onExited={onExited}
          key={item.src}
          className={styles.carouselItem}
        >
          <img src={item.src} alt={item.altText} className={styles.carouselImg} />
          {/* <div className="carousel-caption d-none d-md-block">
            <h5>{item.caption}</h5>
          </div> */}
        </CarouselItem>
      );
    });
  }, [])

  return (
    <>
      <Carousel
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
