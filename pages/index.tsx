import type { InferGetStaticPropsType } from "next";
import { useState } from "react";
import styled from "styled-components";

import { getAllCountries } from "../lib/countries";
import CountryCard from "../components/CountryCard";
import SelectRegion from "../components/SelectRegion";
import TextFilter from "../components/TextFilter";

export const getStaticProps = async () => {
  const countries = await getAllCountries();
  return {
    props: {
      countries,
    },
  };
};

const Grid = styled.div`
  margin: 0 5.5vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 5.3rem;

  @media (max-width: 680px) {
    margin: 15vw;
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 5.5vw;
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

  const filteredCountries = !textFilter
    ? filteredByRegion
    : filteredByRegion.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(textFilter.toLowerCase());
      });

  return (
    <>
      <FiltersContainer>
        <TextFilter value={textFilter} onChange={setTextFilter} />
        <SelectRegion defaultValue={regionFilter} onChange={setRegionFilter} />
      </FiltersContainer>
      <Grid>
        {filteredCountries.map((entry) => (
          <CountryCard country={entry} key={entry.cca3} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
