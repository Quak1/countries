import type { InferGetStaticPropsType } from "next";
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
  return (
    <Grid>
      {countries.map((entry) => (
        <CountryCard country={entry} key={entry.cca3} />
      ))}
    </Grid>
  );
};

export default Home;
