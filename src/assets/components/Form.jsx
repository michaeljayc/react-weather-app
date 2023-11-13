import { useGlobalContext } from "../../context";

const Form = () => {
  const { getWeatherDetails } = useGlobalContext();
  let newObj = {
    state: "",
    city: "",
  };
  const handleChange = (e) => {
    if (e.target.name === "city") {
      const currentCity = e.target.value;
      newObj.city = currentCity;
    }

    if (e.target.name === "state") {
      const currentState = e.target.value;
      newObj.state = currentState;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getWeatherDetails(newObj);
  };

  return (
    <form className="weather-form">
      <div className="form-row">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-input"
          id="city"
          name="city"
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label className="form-label" htmlFor="state">
          Province/State
        </label>
        <input
          type="text"
          className="form-input"
          id="state"
          name="state"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
