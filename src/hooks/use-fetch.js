import { useState, useEffect } from "react";

import { config } from "../config";

export const useFetch = (lat, lng) => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: false,
    errorMessage: "",
  });

  useEffect(() => {
    const URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&appid=${config.openWeatherAPIKey}`;

    const fetchData = async () => {
      try {
        setState((prevState) => ({ ...prevState, loading: true, error: false, errorMessage: "" }));

        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setState((prevState) => ({ ...prevState, data: data[0] }));
      } catch (error) {
        setState((prevState) => ({ ...prevState, error: true, errorMessage: error.message }));
      } finally {
        setState((prevState) => ({ ...prevState, loading: false }));
      }
    };

    if (lat && lng) {
      fetchData();
    }
  }, [lat, lng]);

  return { ...state };
};
