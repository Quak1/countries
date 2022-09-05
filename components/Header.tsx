import styled from "styled-components";

import ThemeToggler from "./ThemeToggler";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  font-size: 24px;
  font-weight: 800;

  height: 80px;
  padding-left: 5.5vw;
  padding-right: 5.5vw;

  box-shadow: 0 0 15px rgba(0, 0, 0, 15%);
  background-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};
`;

interface HeaderProps {
  toggleTheme: () => void;
  darkModeActive: boolean;
}

const Header = ({ toggleTheme, darkModeActive }: HeaderProps) => {
  return (
    <HeaderContainer>
      <div>Where in the world?</div>
      <ThemeToggler toggleTheme={toggleTheme} darkModeActive={darkModeActive} />
    </HeaderContainer>
  );
};

export default Header;
