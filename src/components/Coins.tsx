import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../actions";

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
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h%</th>
                <th>7d%</th>
                <th>Market Cap</th>
                <th>Volume (24h)</th>
                <th>Circulating Supply</th>
                <th>Last 7 Days</th>
              </tr>
            </thead>
            <tbody>
              {props.coins.map((coin) => {
                return (
                  <tr key={coin.id}>
                    <td>{coin.id}</td>
                    <td>{coin.name}</td>
                    <td>price</td>
                    <td>24h</td>
                    <td>7d</td>
                    <td>market cap</td>
                    <td>volume 24h</td>
                    <td>circualating supply</td>
                    <td>Grafik last 7 days</td>
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
