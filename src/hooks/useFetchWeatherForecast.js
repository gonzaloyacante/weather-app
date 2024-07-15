import { useState, useEffect } from "react";
import apiService from "../api/apiService";

const useFetchWeatherForecast = (location, days) => {
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchWeatherForecast(location, days);
        setForecastData(data.forecast.forecastday.slice(0, days));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location, days]);

  return { forecastData, isLoading, error };
};

export default useFetchWeatherForecast;
