import { createContext, useContext, useEffect, useReducer } from "react";
import { CLEAR_DATA, GET_WEATHER_DATA, LOADING } from "./action";
import reducer from "./reducer";
import {
  getLocationDetails,
  getLocationWeatherData,
} from "./utils/weatherUtils";
import transformData from "./utils/transformData";

const defaultState = {
  isLoading: false,
  payload: {},
};

export const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearData = () => {
    dispatch({ type: CLEAR_DATA });
  };

  const getWeatherDetails = async (formObj) => {
    let data = {};
    if (formObj?.city && formObj?.state) {
      dispatch({ type: LOADING, payload: { isLoading: true } });
      const locationData = await getLocationDetails(formObj);
      const weatherData = await getLocationWeatherData(locationData);
      data = transformData(weatherData);
    }
    dispatch({ type: GET_WEATHER_DATA, payload: { data } });
  };

  useEffect(() => {
    state.isLoading = true;
    getWeatherDetails();
  }, []);

  return (
    <AppContext.Provider value={{ state, clearData, getWeatherDetails }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
