import type { InferGetStaticPropsType } from "next";
import { useState } from "react";
import styled from "styled-components";

import { getAllCountries } from "../lib/countries";
import CountryCard from "../components/CountryCard";

export const getStaticProps = async () => {
  const countries = await getAllCountries();
  return {
    props: {
      countries,
    },
  };
};

const Grid = styled.div`
  margin: 5.7rem;
  margin: 5.5vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 5.3rem;

  @media (max-width: 680px) {
    margin: 15vw;
  }
`;

const Home = ({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [textFilter, setTextFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const filteredByRegion = !regionFilter
    ? countries
    : countries.filter((country) => {
        return country.region === regionFilter;
      });

  const filteredCountries = filteredByRegion.filter((country) => {
    return country.name.common.toLowerCase().includes(textFilter.toLowerCase());
  });

  return (
    <>
      <input
        type="text"
        value={textFilter}
        onChange={(e) => setTextFilter(e.target.value)}
      />
      <select
        name="region"
        value={regionFilter}
        onChange={(e) => setRegionFilter(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <Grid>
        {filteredCountries.map((entry) => (
          <CountryCard country={entry} key={entry.cca3} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
