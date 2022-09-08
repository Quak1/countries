import styled from "styled-components";
import Image from "next/future/image";
import Link from "next/link";

import { CountryExtendedBorders } from "../types";

interface CountryDetailsProps {
  country: CountryExtendedBorders;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

const FlagContainer = styled.div`
  min-width: 400px;
  max-width: 560px;
  max-height: 400px;
  flex: 2 1 400px;

  @media (max-width: 680px) {
    min-width: 85vw;
  }
`;

const InfoContainer = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  flex: 1 1 420px;
`;

const CountryName = styled.h1`
  margin: 0;
  margin-bottom: 35px;
`;

const InfoGroups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 60px;
  gap: 60px 10px;
`;

const InfoGroup = styled.div`
  flex: 1 1 200px;
`;

const InfoTitle = styled.span`
  font-weight: 600;
`;

const InfoEntry = styled.div`
  margin-bottom: 13px;
`;

const BorderCountry = styled.a`
  color: inherit;
  text-decoration: unset;
  padding: 4px 18px;
  background-color: ${({ theme }) => theme.colors.elements};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const BorderCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

// TODO faded color
const NoBorderMessage = styled.span`
  font-style: italic;
`;

const CountryDetails = ({ country }: CountryDetailsProps) => {
  return (
    <Container>
      <FlagContainer>
        <Image
          src={country.flags.svg}
          alt={`${country.name.common}'s flag`}
          width="0"
          height="0"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "100%",
            objectFit: "contain",
            boxShadow: "0 0 20px rgba(0, 0, 0, 5%)",
          }}
        />
      </FlagContainer>

      <InfoContainer>
        <CountryName>{country.name.common}</CountryName>
        <InfoGroups>
          <InfoGroup>
            <InfoEntry>
              <InfoTitle>Native Name: </InfoTitle>
              {Object.entries(country.name.nativeName)
                .map((entry) => entry[1].common)
                .join(", ")}
            </InfoEntry>
            <InfoEntry>
              <InfoTitle>Population: </InfoTitle>
              {country.population.toLocaleString(undefined)}
            </InfoEntry>
            <InfoEntry>
              <InfoTitle>Region: </InfoTitle>
              {country.region}
            </InfoEntry>
            <InfoEntry>
              <InfoTitle>Sub Region: </InfoTitle>
              {country.subregion}
            </InfoEntry>
            <InfoEntry>
              <InfoTitle>Capital: </InfoTitle>
              {country.capital}
            </InfoEntry>
          </InfoGroup>
          <InfoGroup>
            <InfoEntry>
              <InfoTitle>Top Level Domain: </InfoTitle>
              {country.tld.join(" | ")}
            </InfoEntry>
            <InfoEntry>
              <InfoTitle>Currencies: </InfoTitle>
              {Object.entries(country.currencies)
                .map((entry) => entry[1].name)
                .join(", ")}
            </InfoEntry>
            <InfoEntry>
              <InfoTitle>Languages: </InfoTitle>
              {Object.entries(country.languages)
                .map((entry) => entry[1])
                .join(", ")}
            </InfoEntry>
          </InfoGroup>
        </InfoGroups>
        <BorderCountriesContainer>
          <InfoTitle>Border Countries: </InfoTitle>
          {country.borders ? (
            country.borders.map((country) => (
              <Link
                key={country.code}
                href={`/country/${country.name.toLowerCase()}`}
                passHref
              >
                <BorderCountry>{country.name}</BorderCountry>
              </Link>
            ))
          ) : (
            <NoBorderMessage>no borders</NoBorderMessage>
          )}
        </BorderCountriesContainer>
      </InfoContainer>
    </Container>
  );
};

export default CountryDetails;
