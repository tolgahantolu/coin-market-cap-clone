import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getCoins } from "../actions";
import { Chart } from "react-google-charts";
import { AiOutlineStar } from "react-icons/ai";
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
            <thead className="border-top">
              <tr className="fs-5">
                <th className="text-center">#</th>
                <th>Name</th>
                <th className="text-end">Price</th>
                <th className="text-end">24h%</th>
                <th className="text-end">7d%</th>
                <th className="text-end">Market Cap</th>
                <th className="text-end">Volume (24h)</th>
                <th className="text-end">Circulating Supply</th>
                <th className="text-center">Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {props.coins.map((coin) => {
                return (
                  <tr key={coin.id} className="fs-5 fw-bolder align-middle">
                    <td className="table__col" style={{ color: "#9b9b9b" }}>
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
                    <td className="table__col text-end">
                      ${coin.quote.USD.price.toLocaleString("en-US")}
                    </td>

                    {coin.quote.USD.percent_change_24h < 0 ? (
                      <td
                        className="table__col text-end"
                        style={{ color: "#EF0E0E" }}
                      >
                        <RiArrowDownSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_24h.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    ) : (
                      <td
                        className="table__col text-end"
                        style={{ color: "#05C873" }}
                      >
                        <RiArrowUpSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_24h.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    )}

                    {coin.quote.USD.percent_change_24h < 0 ? (
                      <td
                        className="table__col text-end"
                        style={{ color: "#EF0E0E" }}
                      >
                        <RiArrowDownSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_7d.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    ) : (
                      <td
                        className="table__col text-end"
                        style={{ color: "#05C873" }}
                      >
                        <RiArrowUpSFill className="mb-2 fs-3" />
                        {coin.quote.USD.percent_change_7d.toLocaleString(
                          "en-US"
                        )}
                      </td>
                    )}

                    <td className="table__col text-end">
                      ${coin.quote.USD.market_cap.toLocaleString("en-US")}
                    </td>
                    <td className="table__col text-end">
                      ${coin.quote.USD.volume_24h.toLocaleString("en-US")}
                    </td>
                    <td className="table__col text-end">
                      {coin.circulating_supply.toLocaleString("en-US")} BTC
                    </td>
                    <td className="table__col text-end">
                      <Chart
                        chartType="Line"
                        data={[
                          ["", ""],
                          [1, 25.7],
                          [2, 30.9],
                          [3, 25.4],
                        ]}
                        width="200px"
                        height="75px"
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
