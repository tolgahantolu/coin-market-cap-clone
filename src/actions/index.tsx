import axios from "axios";

// middlaware'da action creater olan fonksiyonumuz geriye bir fonksiyon daha döndürüyor o da dispatch'i parametre olarak alıyor
export const getCoins = () => (dispatch) => {
  axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": "79835256-2ae7-4826-83bd-88c6b006617d",
        },
      }
    )
    .then((response) =>
      dispatch({ type: "GET_COINS_SUCCESS", payload: response.data })
    )
    .catch((err) =>
      dispatch({
        type: "GET_COINS_ERROR",
        payload: `Something went wrong! ${err.message}`,
      })
    );
};
