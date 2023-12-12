/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    screens:{
      sm:'560px',
      md:'768px',
      lg:'992px',
      xl:'1200px'

    },
    container:{

      center:true,
      padding:'1rem'
      

       },
   
    extend: {},
  },
  plugins: [],
}

