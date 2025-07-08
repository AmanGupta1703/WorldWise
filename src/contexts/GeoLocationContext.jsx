import { createContext, useContext, useReducer } from "react";

const initialState = {
  loading: false,
  position: [37.7749, -122.4194],
  error: false,
};

const GeoLocationContext = createContext();

const GeoLocationProvider = GeoLocationContext.Provider;

const geoLocationReducer = (state, action) => {
  switch (action.type) {
    case "geolocation/loading":
      return { ...state, loading: true, error: false };

    case "geolocation/position":
      return { ...state, position: action.payload, loading: false, error: false };

    case "geolocation/error":
      return { ...state, error: true, loading: false };

    default:
      break;
  }
};

const GeoLocationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(geoLocationReducer, initialState);

  return <GeoLocationProvider value={{ ...state, dispatch }}>{children}</GeoLocationProvider>;
};

export const useGeoLocation = () => {
  const context = useContext(GeoLocationContext);
  if (!context) {
    throw new Error("useGeoLocation must be used within a GeoLocationContextProvider");
  }
  return context;
};

export default GeoLocationContextProvider;
