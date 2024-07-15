const apiKey = "b4f9b019b1804559a04123736241307";
const baseApiUrl = "https://api.weatherapi.com/v1";

const apiService = {
  async fetchCurrentWeather(location) {
    const endpoint = `${baseApiUrl}/current.json?key=${apiKey}&q=${location}&lang=es`;
    return await this.fetchData(endpoint);
  },

  async fetchWeatherForecast(location, days) {
    const endpoint = `${baseApiUrl}/forecast.json?key=${apiKey}&q=${location}&days=${days}&lang=es`;
    return await this.fetchData(endpoint);
  },

  async fetchData(endpoint) {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      throw error;
    }
  },
};

export default apiService;
