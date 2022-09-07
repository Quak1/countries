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
  return countryCodes.map((code) => ({
    params: {
      id: code.cca3,
    },
  }));
}

export async function getCountryByCode(id: string) {
  const res = await fetch(`${API_URL}/alpha/${id}`);
  const country: Country = (await res.json())[0];

  if (!country.borders) return country;

  const borderCountries = await Promise.all(
    country.borders.map(async (code) => {
      const name = await getCommonCountryName(code);
      return {
        name,
        code,
      };
    })
  );
  const extendedCountry: CountryExtendedBorders = {
    ...country,
    borders: borderCountries,
  };

  return extendedCountry;
}

async function getCommonCountryName(id: string) {
  const res = await fetch(`${API_URL}/alpha/${id}?fields=name`);
  const name: CountryName = await res.json();
  return name.name.common;
}
