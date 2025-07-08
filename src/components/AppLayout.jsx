import { Outlet } from "react-router-dom";

import { useGeoLocation } from "../contexts/GeoLocationContext";

import { AppNav, Button, Map, UserBox } from "../components";
import { getUserPosition } from "../utils";

const AppLayout = () => {
  const { loading, error, dispatch } = useGeoLocation();

  const handleUserPosition = async () => {
    try {
      dispatch({ type: "geolocation/loading" });
      const position = await getUserPosition();
      dispatch({ type: "geolocation/position", payload: position });
    } catch (error) {
      dispatch({ type: "geolocation/error" });
    }
  };

  return (
    <div className="h-full flex ">
      <div className="flex-1/3 py-7 px-12 flex flex-col">
        <div className="flex flex-col items-center">
          <div>
            <img className="h-12 object-cover" src="/assets/logo.png" />
          </div>

          <nav className="mt-8 mb-5">
            <AppNav />
          </nav>
        </div>

        <div className="flex-1">
          <Outlet />
        </div>

        <p className="text-xs text-white text-center mt-auto font-bold tracking-wide">
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </div>

      <div className="flex-2/3 border border-white relative">
        <Map />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[999]">
          <Button onClick={handleUserPosition} className="text-sm">
            {!error ? (loading ? "Loading..." : "Use your position") : ""}
            {error && <span>Failed to get your location</span>}
          </Button>
        </div>

        <div className="absolute top-4 right-4 z-[999]">
          <UserBox />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
