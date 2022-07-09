/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft red: hsl(10, 79%, 65%)
        // Cyan: hsl(186, 34%, 60%)
        // Dark brown: hsl(25, 47%, 15%)
        // Medium brown: hsl(28, 10%, 53%)
        // Cream: hsl(27, 66%, 92%)
        // Very pale orange: hsl(33, 100%, 98%)
        'soft-red': 'hsl(10, 79%, 65%)',
        'cyan': 'hsl(186, 34%, 60%)',
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'cream': 'hsl(27, 66%, 92%)',
        'pale-orange': 'hsl(33, 100%, 98%)'
      },
      fontFamily: {
        'sans': ['DM Sans']
      },
      gridTemplateRows: {
        'chart': 'auto 24px'
      }
    },
  },
  plugins: [],
}
