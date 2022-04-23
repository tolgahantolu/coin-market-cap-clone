import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  MdToggleOn,
  MdLocalFireDepartment,
  MdArrowForwardIos,
} from "react-icons/md";
import {
  RiArrowUpSFill,
  RiArrowDownSFill,
  RiBitCoinFill,
  RiPieChartFill,
  RiTimeLine,
} from "react-icons/ri";
import "./Highlights.css";

export default function Highlights() {
  return (
    <div>
      <Container fluid className="mt-5">
        {/* title row */}
        <Row className="d-flex align-items-center ps-4 ms-4 pe-4 me-4">
          <Col>
            <h1 className="fw-bolder">
              Today's Cryptocurrency Prices by Market Cap
            </h1>
          </Col>

          <Col className="d-flex align-items-center justify-content-end">
            <h4 className="highlights__text">Highlights</h4>{" "}
            <MdToggleOn className="display-1 ms-3 highlights__icon" />
          </Col>
        </Row>
        {/* description row */}
        <Row className="d-flex align-items-center ps-4 ms-4 pe-4 me-4">
          <Col>
            <p className="highlights__description">
              The global crypto market cap is <b>$1.84T </b>, a{" "}
              <span style={{ color: "#EF0E0E" }} className="fw-bolder">
                <RiArrowDownSFill className="mb-1" /> 1.85%
              </span>{" "}
              decrease over the last day.{" "}
              <a href="#" className="ms-4 fw-bolder highlights__link">
                Read More
              </a>
            </p>
          </Col>
        </Row>
        {/* table row */}
        <Row className="mt-3 ps-4 ms-4 pe-4 me-4">
          {/* trendings col */}
          <Col>
            <div className="m-1 p-3 table__background rounded-3 shadow">
              <div className="table__header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <MdLocalFireDepartment
                    className="table__icon fs-1"
                    style={{ color: "orangered" }}
                  />
                  <h2 className="table__title ms-2 mt-1 fw-bolder">Trending</h2>
                </div>
                <a
                  href="#"
                  className="table__link text-decoration-none fs-5 fw-bolder"
                >
                  More <MdArrowForwardIos />
                </a>
              </div>
              <div className="table__coins ms-3">
                {/* coin 1 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      1
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      STEPN{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        GMT
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#05C873" }}>
                      <RiArrowUpSFill /> 13.66%
                    </span>
                  </div>
                </div>
                {/* coin 2 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      2
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      Stargate Finance{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        STG
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#EF0E0E" }}>
                      <RiArrowDownSFill /> 3.22%
                    </span>
                  </div>
                </div>

                {/* coin 3 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      3
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      PolkaBridge{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        PBR
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#EF0E0E" }}>
                      <RiArrowDownSFill /> 4.34%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* biggest gainers col */}
          <Col>
            <div className="m-1 p-3 table__background rounded-3 shadow">
              <div className="table__header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <RiPieChartFill
                    className="table__icon fs-1"
                    style={{ color: "#05C873" }}
                  />
                  <h2 className="table__title ms-2 mt-1 fw-bolder">
                    Biggest Gainers
                  </h2>
                </div>
                <a
                  href="#"
                  className="table__link text-decoration-none fs-5 fw-bolder"
                >
                  More <MdArrowForwardIos />
                </a>
              </div>
              <div className="table__coins ms-3">
                {/* coin 1 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      1
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      STEPN{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        GMT
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#05C873" }}>
                      <RiArrowUpSFill /> 13.66%
                    </span>
                  </div>
                </div>
                {/* coin 2 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      2
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      Stargate Finance{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        STG
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#EF0E0E" }}>
                      <RiArrowDownSFill /> 3.22%
                    </span>
                  </div>
                </div>

                {/* coin 3 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      3
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      PolkaBridge{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        PBR
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#EF0E0E" }}>
                      <RiArrowDownSFill /> 4.34%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* recently added col */}
          <Col>
            <div className="m-1 p-3 table__background rounded-3 shadow">
              <div className="table__header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <RiTimeLine
                    className="table__icon fs-1"
                    style={{ color: "#616060" }}
                  />
                  <h2 className="table__title ms-2 mt-1 fw-bolder">
                    Recently Added
                  </h2>
                </div>
                <a
                  href="#"
                  className="table__link text-decoration-none fs-5 fw-bolder"
                >
                  More <MdArrowForwardIos />
                </a>
              </div>
              <div className="table__coins ms-3">
                {/* coin 1 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      1
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      STEPN{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        GMT
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#05C873" }}>
                      <RiArrowUpSFill /> 13.66%
                    </span>
                  </div>
                </div>
                {/* coin 2 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      2
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      Stargate Finance{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        STG
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#EF0E0E" }}>
                      <RiArrowDownSFill /> 3.22%
                    </span>
                  </div>
                </div>

                {/* coin 3 */}
                <div className="table__coin d-flex justify-content-between align-items-center mt-4">
                  <div className="d-flex align-items-center">
                    <div className="table__number text-muted fs-6 fw-bolder">
                      3
                    </div>
                    <RiBitCoinFill
                      className="table__coin-icon ms-4 me-3 fs-4"
                      style={{ color: "darkgoldenrod" }}
                    />
                    <span className="table__coin-name fw-bolder">
                      PolkaBridge{" "}
                      <span className="table__coin-name-2 ps-2 text-muted">
                        PBR
                      </span>
                    </span>
                  </div>
                  <div className="table__coin-percent fw-bolder me-1">
                    <span style={{ color: "#EF0E0E" }}>
                      <RiArrowDownSFill /> 4.34%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
