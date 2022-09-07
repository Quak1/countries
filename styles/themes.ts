const sharedProperties = {
  shadow: "0 0 7px rgba(0, 0, 0, 20%)",
  borderRadius: "5px",
  marginDesktop: "80px",
  marginMobile: "7.5vw",
  font: {
    default: "12px",
    details: "14px",
  },
};

export const ligthTheme = {
  ...sharedProperties,
  colors: {
    text: "hsl(200, 15%, 8%)",
    fadedText: "#9FAFB8",
    input: "hsl(0, 0%, 52%)",
    background: "hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
  },
};

export const darkTheme = {
  ...sharedProperties,
  colors: {
    text: "hsl(0, 0%, 100%)",
    fadedText: "#929292",
    input: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
  },
};
