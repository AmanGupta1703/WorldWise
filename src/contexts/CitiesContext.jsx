import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = JSON.parse(localStorage.getItem("state")) || {
  cities: [],
  currentCity: {},
};

const CitiesContext = createContext();

const CitiesProvider = CitiesContext.Provider;

const citiesReducer = (state, action) => {
  switch (action.type) {
    case "cities/new-city":
      return {
        ...state,
        cities: state.cities.length
          ? state.cities.some(
              (city) => city.cityName.toLowerCase() === action.payload.cityName.toLowerCase(),
            )
            ? state.cities
            : [...state.cities, action.payload]
          : [...state.cities, action.payload],
      };

    case "cities/current-city":
      return { ...state, currentCity: action.payload };

    case "cities/delete-city":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== Number(action.payload)),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CitiesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(citiesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return <CitiesProvider value={{ ...state, dispatch }}>{children}</CitiesProvider>;
};

export { CitiesContextProvider };

export const useCities = () => {
  const context = useContext(CitiesContext);
  if (!context) {
    throw new Error("useCities must be used within a CitiesContextProvider");
  }
  return context;
};
