import Link from "next/link";
import styled from "styled-components";

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  max-width: 140px;
  padding: 10px 35px;
  font-weight: 600;

  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: unset;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Icon = styled.span`
  margin-right: 10px;
  font-weight: 600;
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
