import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkModeActive, setDarkModeActive] = useState(false);
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode: boolean) => {
    window.localStorage.setItem("darkModeActive", String(mode));
    setDarkModeActive(mode);
  };

  const toggleTheme = () => setMode(!darkModeActive);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("darkModeActive");
    localTheme ? setDarkModeActive(localTheme === "true") : setMode(false);
    // setMountedComponent(true);
  }, []);

  return { darkModeActive, toggleTheme };
};

export default useDarkMode;
