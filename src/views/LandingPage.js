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
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
// import IndexHeader from "components/Headers/IndexHeader.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  const mainBusiness = [
    {
      title: "MARKET BISNIS ANALISIS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "MARKET BISNIS ANALISIS",
      image: "nc-chart-bar-32",
    },
    {
      title: "DISTRIBUTOR",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "DISTRIBUTOR",
      image: "nc-bulb-63",
    },
    {
      title: "WAREHOUSE MANAGEMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "WAREHOUSE MANAGEMENT",
      image: "nc-album-2",
    },
    {
      title: "HR MANAGEMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "HR MANAGEMENT",
      image: "nc-sun-fog-29",
    },
  ];

  const mainDescription =
    "Igooana dirancang sebagai solusi yang dapat memberikan manfaat bagi mitra kerja untuk mempermudah serta mempercepat proses monitoring dan control project di lapangan dan juga sebagai sebuah platform digital yang dapat dikembangkan menjadi sebuah  ekosistem yang sustainable.";

  const mainTeam = [
    {
      name: "Principle",
      category: null,
      description:
        "— Memuaskan kebutuhan, keinginan, dan tuntutan client. Profitabilitas: Menghasilkan keuntungan untuk bisnis untuk mendukung pertumbuhan yang berkelanjutan.",
      image: "clem-onojeghuo-3.jpg",
    },
    {
      name: "Distributor",
      category: null,
      description:
        "— Menyalurkan barang maupun jasa ke konsumen. Menjadi fasilitator supaya konsumen mudah memperoleh barang atau jasa dari produsen.",
      image: "joe-gardner-2.jpg",
    },
    {
      name: "Agency",
      category: null,
      description:
        "— Bertujuan untuk mendekati permintaan oleh pengguna industri atau rumah tangga konsumen, meningkatkan kinerja pemasaran penjualan kembali.",
      image: "erik-lucatero-2.jpg",
    },
  ];

  return (
    <>
      <ExamplesNavbar />
      {/* <LandingPageHeader /> */}
      {/* <IndexHeader /> */}
      <SectionCarousel />
      <div className="main">
        <div
          className="section text-center"
          style={{ padding: "20px 0 70px 0", backgroundColor: "#D8FDF5" }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto my-5" md="8">
                <img
                  className="mt-5 mb-3"
                  alt="IGOOANA"
                  src={require("assets/img/igooana_logo.png").default}
                />
                <h2 className="title">SIMPLY AND SIMPLIFY</h2>
                <h5>{mainDescription}</h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <hr style={{ borderColor: "#66615b" }} />
            <br />
            <br />
            <Row className="mb-5">
              {mainBusiness.map((bus) => (
                <Col md="3">
                  <div
                    className="info pt-2"
                    style={{ backgroundColor: "#DAE7DE", borderRadius: "20px" }}
                  >
                    <div className="icon icon-info">
                      <i className={`nc-icon nc-album-2 ${bus.image}`} />
                    </div>
                    <div className="description p-2">
                      <h4 className="info-title m-0" style={{ height: "52px" }}>
                        {bus.title}
                      </h4>
                      <p
                        className="description mt-2"
                        style={{ height: "100px" }}
                      >
                        {bus.description}
                      </p>
                      <Button className="btn-link" color="info" href={bus.link}>
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <Col
                className="ml-auto mr-auto my-5"
                md="8"
                style={{ border: "1px solid #66615b", borderRadius: "20px" }}
              >
                <h2 className="title my-5">WHY IGOOANA?</h2>
                <h5 className="text-justify pr-3">
                  <ol>
                    <li className="my-3">
                      We are a national multidisciplinary organisation allowing
                      us to combine marketing and activation capability
                      expertise into ONE team ensuring a full service Supply
                      Chain & Operations offering and enabling a wide
                      perspective on industry benchmarks and innovation.{" "}
                    </li>
                    <li className="my-3">
                      We are recognised for our collaborative work style. We do
                      not deploy mass produced “one size fits all” methods.
                      Instead we tailor our methodologies and tools precisely to
                      the needs of our clients so that they serve as real
                      accelerators to analysis and implementation.{" "}
                    </li>
                    <li className="my-3">
                      We differentiate ourselves by our ability to execute on
                      the advice we provide. We typically help our clients to
                      implement until true benefits are realised and are
                      sustainably embedded in the organisation.{" "}
                    </li>
                    <li className="my-3">
                      We have a strategic partnership with the Indolima (one of
                      Indonesian biggest BTL AGENCY) with access to an extensive
                      network of Indonesia nations wide
                    </li>
                  </ol>
                </h5>
                <br />
                <Button
                  className="btn-round mb-5"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="section section-dark text-center"
          style={{ backgroundColor: "#112C22" }}
        >
          <Container>
            <h2 className="title">Selling Point</h2>
            <Row>
              {mainTeam.map((team) => (
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={
                            require("assets/img/faces/" + team.image).default
                          }
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">{team.name}</CardTitle>
                          <h6 className="card-category">{team.category}</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        {team.description}
                      </p>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-neutral"
                        color="link"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-google-plus" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-neutral ml-1"
                        color="link"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <div
          // className="section landing-section"
          className="section section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/login-image.jpg").default + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      {/* <label>Name</label> */}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      {/* <label>Email</label> */}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <a
                        href="mailto:indolima@indonesia5.com"
                        action="mailto:indolima@indonesia5.com"
                      >
                        <Button className="btn-fill" color="danger" size="lg">
                          Send Message
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
