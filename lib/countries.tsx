import { CardPartialCountry } from "../types";

const API_URL = "https://restcountries.com/v3.1";

export async function getAllCountries() {
  const res = await fetch(
    `${API_URL}/all?fields=region,population,capital,name,flags,cca3`
  );
  const countries: CardPartialCountry[] = await res.json();
  return countries;
}
