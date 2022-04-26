const initialState = {
  coins: [],
  message: "",
};

export function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_COINS_SUCCESS":
      return { ...state, coins: payload };

    case "GET_COINS_ERROR":
      return { ...state, message: payload };

    default:
      return state;
  }
}
