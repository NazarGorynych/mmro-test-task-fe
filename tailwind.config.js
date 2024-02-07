module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "32px"
      },
      colors: {
        mainGray: "#EEEEEE"
      },
      boxShadow: {
        'inner-sm': 'inset 0px 4px 4px 0px #00000066',
        'xl': '0px 18px 100px -24px #6d737a59',
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
