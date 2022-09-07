import Link from "next/link";

import CountryCard from "./CountryCard";
import { CardPartialCountry } from "../types";
import styled from "styled-components";

interface ClickableCountryCardProps {
  country: CardPartialCountry;
}

const A = styled.a`
  text-decoration: none;
`;

const ClickableCountryCard = ({ country }: ClickableCountryCardProps) => (
  <Link href={`/country/${country.cca3}`} passHref prefetch={false}>
    <A>
      <CountryCard country={country} />
    </A>
  </Link>
);

export default ClickableCountryCard;
