import { GetStaticProps } from "next";
import styled from "styled-components";

import CountryDetails from "../../components/CountryDetails";
import BackButton from "../../components/BackButton";
import { getAllNames, getCountryByName } from "../../lib/countries";
import { CountryExtendedBorders } from "../../types";

interface DetailsProps {
  country: CountryExtendedBorders;
}

const Container = styled.div`
  margin: 0 80px;

  @media (max-width: 680px) {
    margin: 0 7.5vw;
  }
`;

const Back = styled.div`
  margin: 80px 0;

  @media (max-width: 680px) {
    margin: 40px 0;
  }
`;

const Details = ({ country }: DetailsProps) => {
  return (
    <Container>
      <Back>
        <BackButton />
      </Back>
      <CountryDetails country={country} />
    </Container>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllNames();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await getCountryByName(params!.name as string);
  return {
    props: {
      country,
    },
  };
};

export default Details;
