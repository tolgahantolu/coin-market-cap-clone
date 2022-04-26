import axios from "axios";

// middlaware'da action creater olan fonksiyonumuz geriye bir fonksiyon daha döndürüyor o da dispatch'i parametre olarak alıyor
export const getCoins = () => (dispatch) => {
  axios
    .get(
      `v1/cryptocurrency/listings/latest?limit=5&sort_dir=desc&sort=market_cap`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": "79835256-2ae7-4826-83bd-88c6b006617d",
          "Access-Control-Allow-Origin": true,
          "Access-Control-Allow-Credentials": true,
          //prettier-ignore
          "Accept": "application/json",
        },
      }
    )
    .then(
      (response) =>
        dispatch({ type: "GET_COINS_SUCCESS", payload: response.data.data }) // ? sondaki .data olmadıazsa => props.coins.map is not a function.
    )
    .catch((err) =>
      dispatch({
        type: "GET_COINS_ERROR",
        payload: `Something went wrong! ${err.message}`,
      })
    );
};
