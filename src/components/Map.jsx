import { useEffect } from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import { useGeoLocation } from "../contexts/GeoLocationContext";
import { useCities } from "../contexts/CitiesContext";
import { useFetch } from "../hooks/use-fetch";

const CityLocation = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const map = useMap();

  const { position } = useGeoLocation();
  const { dispatch } = useCities();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const { data } = useFetch(lat, lng);

  useMapEvents({
    click(e) {
      dispatch({ type: "cities/current-city", payload: null });

      const { lat, lng } = e?.latlng;

      if (lat && lng) {
        dispatch({ type: "cities/current-city", payload: data });

        navigate(`/app/form?lat=${lat}&lng=${lng}`);
      }
    },
  });

  useEffect(() => {
    if (position) map.flyTo(position);
  }, [position]);

  // useEffect(() => {
  //   if (!lat || !lng || !data) return;

  //   dispatch({ type: "cities/current-city", payload: data });
  // }, [lat, lng, data]);
};

const ShowMarker = () => {
  const { cities } = useCities();

  const map = useMap();

  return cities?.map((city) => (
    <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
      <Popup>{city.cityName}</Popup>
    </Marker>
  ));
};

const Map = () => {
  const { position } = useGeoLocation();

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ShowMarker />
      <CityLocation />
    </MapContainer>
  );
};

export default Map;
