import { useCities } from "../contexts/CitiesContext";

import { getFlagUrl } from "../utils";

const Countries = () => {
  const { cities } = useCities();

  const countriesArr = cities.map(({ country, emoji }) => ({ country, emoji }));
  const uniqueCountriesSet = new Set(countriesArr.map(JSON.stringify));
  const uniqueCountries = Array.from(uniqueCountriesSet).map(JSON.parse);

  if (!uniqueCountries.length) {
    return (
      <p className="text-white text-center mt-5 mx-auto w-3/4 font-[600] text-[18px]">
        👋 Add your first city by clicking on a city on the map
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-2 gap-4">
      {uniqueCountries?.map((country) => (
        <li
          key={crypto.randomUUID()}
          className="bg-zinc-600/50 py-2.5 px-5 flex flex-col items-center rounded-[7px] border-l-4 border-l-yellow-400 gap-2">
          <img src={getFlagUrl(country.emoji.toLowerCase())} className="h-7" alt={country} />
          <span className="text-white font-bold text-base">{country.country}</span>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
