import { useGlobalContext } from "../../context";

import sunrise from "../../images/sunrise.png";
import sunset from "../../images/sunset.png";

const Weather = () => {
  const { state } = useGlobalContext();
  const { isLoading } = state.isLoading;
  const { dateAndTime, main, weather, sys } = state.payload;

  if (isLoading) {
    return (
      <section className="weather-details">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="weather-details">
      {!state?.payload.dateAndTime ? (
        <h2 className="title">No Data Available</h2>
      ) : (
        <>
          <div className="date-time">
            <div>
              <h4>Current Weather</h4>
              <span>{dateAndTime}</span>
            </div>
            <div>Report Weather</div>
          </div>
          <div className="weather-status">
            <div className="weather-desc">
              <div className="weather-desc-row1">
                <img src={weather?.icon} />
                <p>{main?.currentTemp}&deg;C</p>
              </div>
              <div className="weather-desc-row2">
                <h5>{weather?.description}</h5>
                <p className="small-text">Feels Like {main?.feelsLike}&deg;</p>
              </div>
            </div>
            <div className="weather-sun">
              <div className="sun-desc">
                <img src={sunrise} />
                <p className="">{sys.sunrise}</p>
              </div>
              <div className="sun-desc">
                <img src={sunset} />
                <p className="">{sys.sunset}</p>
              </div>
            </div>
          </div>
          <div className="others">
            <div className="others-col">
              <p className="others-col-title">Humidity</p>
              <p className="others-col-desc">{main?.humidity}%</p>
            </div>
            <div className="others-col">
              <p className="others-col-title">Pressure</p>
              <p className="others-col-desc">{main?.pressure} mb</p>
            </div>
            <div className="others-col">
              <p className="others-col-title">High</p>
              <p className="others-col-desc">{main?.temp_max}&deg;</p>
            </div>
            <div className="others-col">
              <p className="others-col-title">Low</p>
              <p className="others-col-desc">{main?.temp_min}&deg;</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Weather;
