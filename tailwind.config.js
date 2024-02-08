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
        mainGray: "#EEEEEE",
        primeryBlue: "#615EF0",
        seconderyGray: "#6D737A",
        borderColor: "#C4C4C4",
        error: "#FF3333"
      },
      boxShadow: {
        "inner-sm": "inset 0px 4px 4px 0px #00000066",
        xl: "0px 18px 100px -24px #6d737a59"
      },
      backgroundImage: {
        "dotted-line":
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%236D737AFF' stroke-width='2' stroke-dasharray='10%2c 14' stroke-dashoffset='60' stroke-linecap='square'/%3e%3c/svg%3e\")"
      }
    }
  },
  plugins: [require("flowbite/plugin")]
};
