export const theme = {
  colors: {
    primary: "#3B3E99",
    secondary: "#292C6F",
    redPrimary: "#FF2E34",
    redTransparent: "(254, 46, 52, 0.5);",
    white: "#FFFFFF",
    darkWhite: "#F0F0F0",
    black: "#7B7B7B",
    darkBlack: "#222222",
  },
  font: {
    family: {
      default: "'Roboto', sans-serif",
    },
    sizes: {
      xsmall: "8rem",
      small: "1.6rem",
      medium: "2.0rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
  },
  media: {
    lteMedium: "(max-width: 768px)",
  },
  spacings: {
    xsmall: "8rem",
    small: "1.6rem",
    medium: "2.4rem",
    large: "3.2rem",
    xlarge: "4.0rem",
    xxlarge: "4.8rem",
    huge: "5.6rem",
    xhuge: "6.4rem",
  },
} as const;
