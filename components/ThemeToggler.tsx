import styled from "styled-components";

interface ThemeTogglerProps {
  toggleTheme: () => void;
  darkModeActive: boolean;
}

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 8px 13px;

  background-color: unset;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.elements};
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

const ButtonIcon = styled.span`
  margin-right: 5px;
`;

const ThemeToggler = ({ toggleTheme, darkModeActive }: ThemeTogglerProps) => {
  return (
    <ToggleButton onClick={() => toggleTheme()}>
      <ButtonIcon className="material-symbols-outlined">
        {darkModeActive ? "light_mode" : "dark_mode"}
      </ButtonIcon>
      {darkModeActive ? "Light Mode" : "Dark Mode"}
    </ToggleButton>
  );
};

export default ThemeToggler;
