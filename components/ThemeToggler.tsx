interface ThemeTogglerProps {
  toggleTheme: () => void;
  darkModeActive: boolean;
}

const ThemeToggler = ({ toggleTheme, darkModeActive }: ThemeTogglerProps) => {
  return (
    <button onClick={() => toggleTheme()}>
      {darkModeActive ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggler;
