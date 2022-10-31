/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Graphik,ui-sans-serif,system-ui,sans-serif",
      },
      colors: {
        lightBlak: "#3f4246",
        darkgray: "#676767",
        dark: "rgb(63, 66, 70)",
        lightgray: "rgb(103, 103, 103)",
        lightBlue: "#9092fb",
        purple: "#86b5ef",
        lighGreen: "#7bdde2"
      },
      backgroundImage: {
        herobackgroundcolor : "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
        bottomdevelopment: "radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(127,208,231,0) 100%)",
        nearlogo: "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
        targetlogo: "radial-gradient(50% 50% at 50% 50%,#7bdde2 0,rgba(123,221,226,0) 100%)"
      },
      lineHeight: {
        '8': '60px',
        '44': '44px'
      },
      zIndex: {
        '99': '99',
      },
      height: {
        '18' : '18px',
        '180' : '180px',
        '186' : '186px',
        '240' : '240px',
        '363' : '363px',
        '400' : '400px' ,
        '480' : '480px',
        '500': '500px',
        '600' : '600px' 
        },
      width: {
        '40' : '40%',
        '180' : '180px',
        '280' : '280px',
        '400' : '400px',
        '480' : '480px',
        '644' : '644px',
        '1067' : '1067px'
      },
      inset: {
        '5' : '5%',
        '15' : '15%',
        '20' : '20%',
        '38' : '38%',
        '70' : '70%',
        '520': '520px',
        '550': '550px',

      },
      blur: {
        xs: '159px',
        sm: '160px',
      }
    },

  },
  plugins: [],
}
