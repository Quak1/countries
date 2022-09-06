import { GetStaticProps } from "next";
import styled from "styled-components";

import CountryDetails from "../../components/CountryDetails";
import { getAllIds, getCountryByCode } from "../../lib/countries";
import { Country } from "../../types";

interface DetailsProps {
  country: Country;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 80px;
`;

const Details = ({ country }: DetailsProps) => {
  return (
    <Container>
      <CountryDetails country={country} />
    </Container>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await getCountryByCode(params!.id as string);
  return {
    props: {
      country,
    },
  };
};

export default Details;
