export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: Record<string, NativeName>;
  latlng: number[];
  landlocked: false;
  borders?: string[];
  area: number;
  demonyms: Record<string, Demonym>;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: Record<string, number>;
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Pictures;
  coatOfArms: Pictures;
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCoda: {
    format: string;
    regex: string;
  };
}

interface NativeName {
  official: string;
  common: string;
}

interface Currency {
  name: string;
  symbol: string;
}

interface Demonym {
  f: string;
  m: string;
}

interface Pictures {
  png: string;
  svg: string;
}

export type CardPartialCountry = Pick<
  Country,
  "name" | "flags" | "cca3" | "capital" | "region" | "population"
>;

export type CountryName = Pick<Country, "name">;
export interface CountryExtendedBorders extends Omit<Country, "borders"> {
  borders?: {
    code: string;
    name: string;
  }[];
}
