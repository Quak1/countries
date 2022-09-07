import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 130px;
  font-weight: 100;
  margin: 0;
`;

const H2 = styled.h2`
  text-align: center;
  margin: 0;
`;

const Message = styled.p`
  font-size: 16px;
  text-decoration: unset;
`;

const A = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: underline;
`;

const NotFound = () => {
  return (
    <Container>
      <H1>404</H1>
      <H2>This page could not be found.</H2>
      <Message>
        Go back to the{" "}
        <Link href="/" passHref>
          <A>Homepage</A>
        </Link>
      </Message>
    </Container>
  );
};

export default NotFound;
