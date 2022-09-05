export interface ThemeType {
  colors: {
    text: string;
    input: string;
    background: string;
    elements: string;
  };
  font: {
    default: string;
    details: string;
  };
}

export const ligthTheme: ThemeType = {
  colors: {
    text: "hsl(200, 15%, 8%)",
    input: "hsl(0, 0%, 52%)",
    background: "hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
  },
  font: {
    default: "12px",
    details: "14px",
  },
};

export const darkTheme: ThemeType = {
  colors: {
    text: "hsl(0, 0%, 100%)",
    input: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
  },
  font: {
    default: "12px",
    details: "14px",
  },
};
