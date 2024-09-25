module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // تعديل المسار حسب ملفات مشروعك
  ],
  theme: {
    extend: {
      colors: {
        neutral1: "#FEFEFE",
        text_neutral: "#6C7275",
        hr: "#E8ECEF",
        blackButton: "#141718",
        blackButton_50: "#6C7275",
        background_50: "#F3F5F7",
        kiwi: "#38CB89",
        blue: "#377DFF",
        para: "#353945",
        1212: "#121212",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
