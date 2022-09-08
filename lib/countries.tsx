import {
  CardPartialCountry,
  Country,
  CountryName,
  CountryExtendedBorders,
} from "../types";

const API_URL = "https://restcountries.com/v3.1";

export async function getAllCountries() {
  const res = await fetch(
    `${API_URL}/all?fields=region,population,capital,name,flags,cca3`
  );
  const countries: CardPartialCountry[] = await res.json();
  return countries;
}

export async function getAllIds() {
  const res = await fetch(`${API_URL}/all?fields=cca3`);
  const countryCodes: { cca3: string }[] = await res.json();
  return countryCodes.flatMap((code) => [
    {
      params: {
        id: code.cca3,
      },
    },
    {
      params: {
        id: code.cca3.toLowerCase(),
      },
    },
  ]);
}

export async function getAllNames() {
  const res = await fetch(`${API_URL}/all?fields=name`);
  const countryNames: CountryName[] = await res.json();
  const countries = countryNames.flatMap((country) => [
    {
      params: {
        name: country.name.common.toLowerCase(),
      },
    },
  ]);
  return countries;
}

async function createExtendedBorders(country: Country) {
  const extendedBorders = await Promise.all(
    country.borders!.map(async (code) => {
      const res = await fetch(`${API_URL}/alpha/${code}`);
      const countries: Country[] = await res.json();

      const country = countries.find((country) => country.cca3 === code);
      if (!country) throw new Error("Country not found");
      return {
        name: country.name.common,
        code: country.cca3,
      };
    })
  );

  return {
    ...country,
    borders: extendedBorders,
  };
}

export async function getCountryByName(name: string) {
  const res = await fetch(`${API_URL}/name/${name}?fullText=true`);
  const countries: Country[] = await res.json();
  const country = countries.find(
    (country) => country.name.common.toLowerCase() === name.toLowerCase()
  );

  if (!country) throw new Error("Country not found");
  if (!country.borders) return country;
  return await createExtendedBorders(country);
}

export async function getCountryByCode(id: string) {
  const res = await fetch(`${API_URL}/alpha/${id}`);
  const countries: Country[] = await res.json();
  const country = countries.find((country) => country.cca3 === id);

  if (!country) throw new Error("Country not found");
  if (!country.borders) return country;
  return await createExtendedBorders(country);
}
