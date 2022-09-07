import Link from "next/link";
import styled from "styled-components";

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  max-width: 140px;
  padding: 10px 35px;

  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: unset;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 15%);
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const BackButton = () => {
  return (
    <Link href="/" passHref>
      <HomeLink>
        <Icon className="material-symbols-outlined">west</Icon>Back
      </HomeLink>
    </Link>
  );
};

export default BackButton;
