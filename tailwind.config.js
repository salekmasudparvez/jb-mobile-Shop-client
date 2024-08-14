const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {  colors: {
      primary:'#1B1F3B',
      secondary:'#F0F0F0'
    },},
  },
  plugins: [],
});