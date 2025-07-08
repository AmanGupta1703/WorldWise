import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { formatISODate, getFlagUrl } from "../utils";

import { useCities } from "../contexts/CitiesContext";
import { useGeoLocation } from "../contexts/GeoLocationContext";

const Cities = () => {
  const navigate = useNavigate();

  const { cities, currentCity, dispatch: citiesDispatch } = useCities();
  const { dispatch } = useGeoLocation();

  if (!cities.length) {
    return (
      <p className="text-white text-center mt-5 mx-auto w-3/4 font-[600] text-[18px]">
        👋 Add your first city by clicking on a city on the map
      </p>
    );
  }

  const handleClick = (ev, city) => {
    if (ev.target.getAttribute("id") === "delete-city") {
      citiesDispatch({ type: "cities/delete-city", payload: Number(city.id) });
      navigate("/app");
    } else {
      citiesDispatch({ type: "cities/current-city", payload: city });

      navigate(`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`);
      dispatch({ type: "geolocation/position", payload: [city.position.lat, city.position.lng] });
    }
  };

  return (
    <ul className="flex flex-col gap-3.5">
      {cities?.map((city) => (
        <li
          onClick={(ev) => handleClick(ev, city)}
          key={city.id}
          className={classNames(
            "cursor-pointer bg-zinc-600 flex items-center justify-between py-2.5 px-5 rounded-[7px] text-white",
            {
              "border-2 border-green-400 border-l-4 border-l-green-400": city.id === currentCity.id,
            },
          )}>
          <div className="flex items-center gap-4">
            <img
              className="h-6"
              src={getFlagUrl(city.emoji.toLowerCase())}
              alt={`${city.cityName} flag emoji`}
            />
            <h3 className="text-base">{city.cityName}</h3>
          </div>
          <div className="flex items-center gap-3">
            <time className="text-sm">({formatISODate(city.date)})</time>
            <button
              id="delete-city"
              className="cursor-pointer block self-center bg-zinc-700 rounded-full h-6 w-6 hover:bg-yellow-500 transition-colors">
              &times;
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cities;
