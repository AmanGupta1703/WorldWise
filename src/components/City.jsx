import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { useCities } from "../contexts/CitiesContext";
import { getFlagUrl } from "../utils";
import { Button } from "./";

const City = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cities } = useCities();

  const [city, setCity] = useState(null);

  useEffect(() => {
    if (cities && id) {
      const foundCity = cities.find((c) => c.id === Number(id));
      setCity(foundCity || null);
    }
  }, [cities, id]);

  if (!city) return null;

  return (
    <div className="bg-zinc-700/80 rounded-lg text-white py-8 px-8 max-h-[70vh] overflow-y-auto shadow-lg flex flex-col gap-8">
      <div>
        <h6 className="text-xs font-semibold text-zinc-400 uppercase">City Name</h6>
        <div className="flex items-center gap-3">
          <img
            src={getFlagUrl(city.emoji.toLowerCase())}
            alt={city.cityName}
            className="w-8 h-8 rounded shadow"
          />
          <span className="text-2xl font-bold">{city.cityName}</span>
        </div>
      </div>

      <div>
        <h6 className="text-xs font-black uppercase text-zinc-400">
          You went to {city.cityName} on
        </h6>
        <p className="text-base">{new Date(city.date).toDateString()}</p>
      </div>

      {city.notes && (
        <div>
          <h6 className="text-xs font-semibold text-zinc-400 uppercase">Your notes</h6>
          <p className="text-base">{city.notes}</p>
        </div>
      )}

      <div>
        <h6 className="text-xs font-semibold text-zinc-400 uppercase">Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${city.cityName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:underline">
          Check out {city.name} on Wikipedia &rarr;
        </a>
      </div>

      <div>
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
  );
};

export default City;
