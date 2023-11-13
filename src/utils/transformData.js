import { getCurrentDateTime } from "./timeUtils";

const transformData = (data) => {
  const dateAndTime = getCurrentDateTime(data.dt);
  const currentTemp = Math.floor(data.main.temp);
  const description = data.weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const feelsLike = Math.floor(data.main.feels_like);
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const temp_max = Math.floor(data.main.temp_max);
  const temp_min = Math.floor(data.main.temp_min);
  const sunrise = getCurrentDateTime(data.sys.sunrise);
  const sunset = getCurrentDateTime(data.sys.sunset);

  return {
    dateAndTime,
    main: {
      currentTemp,
      feelsLike,
      humidity,
      pressure,
      temp_max,
      temp_min,
    },
    weather: {
      description,
      icon,
    },
    sys: {
      sunrise,
      sunset,
    },
  };
};

export default transformData;
