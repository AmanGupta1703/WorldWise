import { useEffect, useState } from "react";

import { useNavigate, useSearchParams } from "react-router-dom";

import { useFetch } from "../hooks/use-fetch";
import { Input, Button, Textarea } from "./";
import { formatCurrentDate } from "../utils";
import { useCities } from "../contexts/CitiesContext";

const currentDate = formatCurrentDate();

const AddCityForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();

  const { loading, data, error, errorMessage } = useFetch(lat, lng);
  const { dispatch, currentCity } = useCities();

  const [formData, setFormData] = useState({
    cityName: "",
    date: currentDate ? currentDate : "",
    notes: "",
  });

  const handleAddCity = (ev) => {
    ev.preventDefault();

    const newCity = {
      cityName: formData.cityName,
      country: currentCity.country,
      emoji: currentCity.country,
      date: new Date(formData.date).toISOString(),
      notes: formData.notes,
      position: {
        lat: Number(lat),
        lng: Number(lng),
      },
      id: Date.now(),
    };

    dispatch({ type: "cities/new-city", payload: newCity });

    if (newCity)
      navigate(`/app/cities/${newCity.id}?lat=${newCity.position.lat}&lng=${newCity.position.lng}`);
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  useEffect(() => {
    if (!loading) return;

    if (loading && !error && currentCity) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        cityName: "name" in currentCity ? currentCity?.name || currentCity?.country : "",
      }));
    }
  }, [loading, error, currentCity]);

  if (loading) return <p className="text-lg text-center text-zinc-400">Loading...</p>;

  if (error) return <p className="text-red-500">{errorMessage || "Error loading city data."}</p>;

  if (!currentCity) {
    return <p className="text-yellow-500">No city data found. Please select a valid location.</p>;
  }

  return (
    <form className="bg-gray-700/50 py-6 px-5 rounded-[7px]" onSubmit={handleAddCity}>
      <div className="flex flex-col gap-5 ">
        <Input
          name="cityName"
          label="City Name"
          placeholder="Enter city name..."
          value={formData.cityName}
          onChange={handleChange}
          required
        />
        <Input
          name="date"
          type="date"
          label={`When did you go to ${formData.cityName}?`}
          value={formData.date}
          onChange={handleChange}
          required
        />
        <Textarea
          name="notes"
          rows={5}
          label={`Notes about your trip to ${formData.cityName}`}
          className="py-2 px-2.5"
          value={formData.notes}
          onChange={handleChange}
        />

        <div className="flex items-center justify-between">
          <Button type="submit">Add</Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            buttonType="secondary">
            &larr; Back
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddCityForm;
