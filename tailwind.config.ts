import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        "linked-primary": "#003330",
        "linked-secondary": "#3BEDB2",

        "primary-light": "#D6FFF5",
        "primary-medium": "#3BEDB2",

        "neutrals-dark-100": "#003330",
        "neutrals-dark-80": "rgba(0, 51, 48, 0.80)",
        "neutrals-dark-10": "rgba(0, 51, 48, 0.10)",

        "neutrals-white-100": "#FFFFFF",
        "neutrals-white-80": "rgba(255, 255, 255, 0.80)",
        "neutrals-white-20": "rgba(255, 255, 255, 0.20)",
      },
    },
  },
};
