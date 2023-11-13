const API_KEY = "a0de4b058132f5cc5783149b6dc7ac9e";

export const getLocationDetails = async (objData) => {
  const { city, state } = objData;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
  );
  const locations = await response.json();
  if (!locations) {
    return;
  }

  for (let location of locations) {
    if (
      location?.name?.toLowerCase() === city.toLowerCase() &&
      location?.state?.toLowerCase() === state.toLowerCase()
    ) {
      return location;
    }
  }
  return;
};

export const getLocationWeatherData = async (locationData) => {
  const { lat, lon } = locationData;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    return await response.json();
  } catch (e) {
    return null;
  }
};
