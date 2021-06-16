/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components

const items = [
  {
    src: "https://miro.medium.com/max/1024/0*dMlL1Geu8ZZGCgP6.jpg",
    altText: "MARKET BISNIS ANALISIS",
    caption: "MARKET BISNIS ANALISIS",
  },
  {
    src: "https://image.cermati.com/q_70,w_1200,h_800,c_fit/ojeknobvbhvg2txrvri4",
    altText: "DISTRIBUTOR",
    caption: "DISTRIBUTOR",
  },
  {
    src: "https://majapahit.id/wp-content/uploads/2021/01/Apa-itu-warehouse-management-system.jpg",
    altText: "WAREHOUSE MANAGEMENT",
    caption: "WAREHOUSE MANAGEMENT",
  },
  {
    src: "https://springup.co.id/wp-content/uploads/2019/02/HR-Human-Resources-Management.jpg",
    altText: "HR MANAGEMENT",
    caption: "HR MANAGEMENT",
  },
];

function SectionCarousel() {
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
      <div className="pt-o" id="carousel">
        <Container
          className="m-0 p-0 w-100"
          style={{
            width: "100vw",
            maxWidth: "100%",
            filter: "brightness(0.5)",
          }}
        >
          <Row className="m-0 p-0">
            <Col md="12" className="m-0 p-0">
              <Card className="page-carousel" style={{ marginBottom: 0 }}>
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <div className="title-brand">
                          <div className="fog-low">
                            <img
                              alt="..."
                              src={require("assets/img/fog-low.png").default}
                            />
                          </div>
                          <div className="fog-low right">
                            <img
                              alt="..."
                              src={require("assets/img/fog-low.png").default}
                            />
                          </div>
                        </div>
                        <img
                          style={{
                            height: "80vh",
                            width: "100vw",
                            borderRadius: 0,
                          }}
                          src={item.src}
                          alt={item.altText}
                        />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                        <div
                          className="moving-clouds"
                          style={{
                            backgroundImage:
                              "url(" +
                              require("assets/img/clouds.png").default +
                              ")",
                          }}
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionCarousel;
