import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getCoins } from "../actions";
import { Chart } from "react-google-charts";
import { AiOutlineStar } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import "./Coins.css";

function Coins(props) {
  useEffect(() => {
    props.getCoins();
  }, []);

  console.log(props);

  return (
    <div>
      <Container fluid className="mt-5">
        <div className="ps-4 ms-4 pe-4 me-4">
          <Table hover>
            <thead className="border-top text-end">
              <tr className="fs-5">
                <th className="text-center">#</th>
                <th className="text-start">Name</th>
                <th>Price</th>
                <th>24h%</th>
                <th>7d%</th>
                <th>
                  Market Cap
                  <span className="text-secondary ms-1">
                    <BsInfoCircleFill className="mb-1" />
                  </span>
                </th>
                <th>
                  Volume (24h)
                  <span className="text-secondary ms-1">
                    <BsInfoCircleFill className="mb-1" />
                  </span>
                </th>
                <th>
                  Circulating Supply
                  <span className="text-secondary ms-1">
                    <BsInfoCircleFill className="mb-1" />
                  </span>
                </th>
                <th className="text-center">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {props.coins.map((coin) => {
                return (
                  <tr key={coin.id} className="fs-5 fw-bolder align-middle">
                    <td style={{ color: "#9b9b9b" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <AiOutlineStar className="" />{" "}
                        <span className="fs-6"> {coin.id} </span>
                      </div>
                    </td>
                    <td className="table__col">
                      {coin.name}
                      <span className="text-secondary fw-light ms-2">
                        {coin.symbol}
                      </span>
                      <span className="badge bg-light text-primary ms-3">
                        BUY
                      </span>
                    </td>
                    <td className="text-end">
                      ${coin.quote.USD.price.toLocaleString("en-US")}
                    </td>

                    {coin.quote.USD.percent_change_24h < 0 ? (
                      <td className="text-end" style={{ color: "#EF0E0E" }}>
                        <RiArrowDownSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_24h.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    ) : (
                      <td className="text-end" style={{ color: "#05C873" }}>
                        <RiArrowUpSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_24h.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    )}

                    {coin.quote.USD.percent_change_24h < 0 ? (
                      <td className="text-end" style={{ color: "#EF0E0E" }}>
                        <RiArrowDownSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_7d.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    ) : (
                      <td className="text-end" style={{ color: "#05C873" }}>
                        <RiArrowUpSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_7d.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    )}

                    <td className="text-end">
                      ${coin.quote.USD.market_cap.toLocaleString("en-US")}
                    </td>
                    <td className="text-end">
                      ${coin.quote.USD.volume_24h.toLocaleString("en-US")}
                    </td>
                    <td className="text-end">
                      {coin.circulating_supply.toLocaleString("en-US")} BTC
                    </td>
                    <td>
                      <Chart
                        className="ms-5"
                        chartType="LineChart"
                        data={[
                          ["", ""],
                          [1, 39.418804],
                          [2, 34.975474],
                          [3, 43.882109],
                          [4, 43.248581],
                          [5, 35.765199],
                          [6, 38.567567],
                          [7, 40.418248],
                        ]}
                        width="200px"
                        height="50px"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins, // artık props.coins'e gittiğimizde state.coins'i verecek. mapStateToProps bu işe yarıyor.
  };
};

export default connect(mapStateToProps, { getCoins })(Coins);
