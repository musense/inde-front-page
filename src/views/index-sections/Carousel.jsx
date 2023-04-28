import React from "react";
import styles from './carousel.module.css'
// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components

const items = [
  {
    // src: await import("assets/img/bg1.png"),
    altText: "Nature, United States",
    // caption: "Nature, United States"
  },
  {
    // src: require("assets/img/bg2.png"),
    altText: "Somewhere Beyond, United States",
    // caption: "Somewhere Beyond, United States"
  },
  {
    // src: require("assets/img/bg3.png"),
    altText: "Yellowstone National Park, United States",
    // caption: "Yellowstone National Park, United States"
  },
  {
    // src: require("assets/img/bg4.png"),
    altText: "Yellowstone National Park, United States",
    // caption: "Yellowstone National Park, United States"
  },
  {
    // src: require("assets/img/bg5.png"),
    altText: "Yellowstone National Park, United States",
    // caption: "Yellowstone National Park, United States"
  },
  {
    // src: require("assets/img/bg6.png"),
    altText: "Yellowstone National Park, United States",
    // caption: "Yellowstone National Park, United States"
  },
  {
    // src: require("assets/img/bg7.png"),
    altText: "Yellowstone National Park, United States",
    // caption: "Yellowstone National Park, United States"
  }
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
  return (
    <>
      <div className={`section ${styles.section}`} id="carousel">
        <Container>
          <Row className="justify-content-center">
            <Col xl="12" lg="12" md="12" className={`${styles.col}`}>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className={`${styles.carousel}`}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                  className={styles.indicator}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                      className={`${styles.item}`}

                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
