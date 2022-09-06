import { GetStaticProps } from "next";
import Image from "next/image";

import { getAllIds, getCountryByCode } from "../../lib/countries";
import { Country } from "../../types";

interface DetailsProps {
  country: Country;
}

const Details = ({ country }: DetailsProps) => {
  return <div>{country.name.common}</div>;
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
