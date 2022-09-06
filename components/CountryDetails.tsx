import styled from "styled-components";
import Image from "next/future/image";

import { Country } from "../types";

interface CountryDetailsProps {
  country: Country;
}

const Container = styled.div`
  display: flex;
`;

const FlagContainer = styled.div`
  min-width: 450px;
  max-width: 40vw;
  max-height: 400px;
`;

const InfoContainer = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const InfoGroups = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 60px;
  gap: 80px 10px;
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

const BorderCountry = styled.span`
  padding: 4px 18px;
  background-color: ${({ theme }) => theme.colors.elements};
  box-shadow: 0 0 10px rgba(0, 0, 0, 20%);
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
          }}
        />
      </FlagContainer>

      <InfoContainer>
        <h1>{country.name.common}</h1>
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
          {/* TODO can click on countries */}
          {country.borders ? (
            country.borders.map((name) => (
              <BorderCountry key={name}>{name}</BorderCountry>
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
