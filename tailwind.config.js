module.exports = {
   mode: "jit",
   purge: ["./src/**/*.{ts,tsx,js,jsx,css}"],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
        colors: {
           primary: "hsl(209, 61%, 16%)",
        },
     },
      fontFamily: {
         sans: ["Roboto", "sans-serif"],
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};

//note: changing the theme color causes other classes,like bg-pink-400 not to work. they are overridden
//extend just adds extra to the default
