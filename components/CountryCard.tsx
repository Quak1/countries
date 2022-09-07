import Image from "next/image";
import styled from "styled-components";

import { CardPartialCountry } from "../types";

interface CountryCardProps {
  country: CardPartialCountry;
}

const CardContainer = styled.article`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius};

  box-shadow: 0 0 15px rgba(0, 0, 0, 8%);
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
`;

const FlagContainer = styled.div`
  position: relative;
  height: 160px;
`;

const InfoContainer = styled.div`
  margin: 25px;
  margin-bottom: 45px;
`;

const CountryName = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-weight: 800;
  font-size: 16px;
`;

const InfoEntry = styled.p`
  margin: 0;
  margin-top: 5px;
`;

const InfoName = styled.em`
  font-weight: 600;
  font-style: normal;
`;

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <CardContainer>
      <FlagContainer>
        <Image
          src={country.flags.svg}
          alt={`${country.name.common}'s flag`}
          layout="fill"
          objectFit="cover"
        />
      </FlagContainer>
      <InfoContainer>
        <CountryName>{country.name.common}</CountryName>
        <InfoEntry>
          <InfoName>Population: </InfoName>
          {country.population.toLocaleString(undefined)}
        </InfoEntry>
        <InfoEntry>
          <InfoName>Region: </InfoName>
          {country.region}
        </InfoEntry>
        <InfoEntry>
          <InfoName>Capital: </InfoName>
          {country.capital[0]}
        </InfoEntry>
      </InfoContainer>
    </CardContainer>
  );
};

export default CountryCard;
