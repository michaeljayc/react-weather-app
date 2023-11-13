import { CLEAR_DATA, GET_WEATHER_DATA, LOADING } from "./action";

const reducer = (state, action) => {
  if (action.type === CLEAR_DATA) {
    return { ...state, city: "", country: "" };
  }

  if (action.type === GET_WEATHER_DATA) {
    const weatherData = action.payload.data;
    return { ...state, payload: { ...weatherData }, isLoading: false };
  }

  if (action.type === LOADING) {
    const loading = action.payload.isLoading;
    return { ...state, isLoading: !loading };
  }
};

export default reducer;
