// src/components/CountryInfo.jsx
async function getCountryInfo(country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  return data[0];
}

export default async function CountryInfo({ country }) {
  const countryData = await getCountryInfo(country);

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-lg font-bold">Country Info 🌍</h2>
      <p>Name: {countryData.name.common}</p>
      <p>Capital: {countryData.capital?.[0]}</p>
      <p>Region: {countryData.region}</p>
      <p>Population: {countryData.population.toLocaleString()}</p>
      <img
        src={countryData.flags.svg}
        alt={countryData.name.common}
        className="w-20 h-10 mt-2 border"
      />
    </div>
  );
}
