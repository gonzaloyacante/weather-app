import { useState, useEffect } from "react";
import apiService from "../api/apiService";

const useFetchWeatherCurrent = (location) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchCurrentWeather(location);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location]);

  return { weatherData, isLoading, error };
};

export default useFetchWeatherCurrent;
