/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        sans: ['"Google Sans Code"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        //light mode
        'light-blue-svg': '#6B95C1',
        'bg-app': 'rgba(244, 250, 255, 1)', // (nuance 1)
        'bg-subtle': 'rgba(230, 244, 254, 0.4)', // Subtile BG for UI elements (nuance 2)
        'bg-ui': '#D5EFFF', // BG for UI elements (nuance 3)
        'bg-ui-hover': '#009EFF2A', // BG for UI elements Hover (nuance 4)
        'bg-ui-active': '#C2E5FF', // BG for UI elements active/selected (nuance 5)
        'border-subtle': '#ACD8FC', // Subtile border and divider (nuance 6)
        'border-ui': '#8EC8F6', // Borders for UI elements and focus ring (nuance 7)
        'border-ui-hover': '#0084E6A1', // Borders for UI elements Hover (nuance 8)
        'bg-solid': '#0090FF', // Solid BG (nuance 9)
        'bg-solid-hover': '#0588F0', // Solid BG Hover (nuance 10)
        'text-low': '#0D74CE', // Text low contrast (nuance 11)
        'text-high': '#113264', // Text high contrast (nuance 12)
        'bg-modal': 'rgba(230, 244, 254, 0.8)',
        //dark mode
        'dark-blue-svg': '#2A4365',
        'dark-bg-app': 'rgba(17, 25, 39, 1)',
        'dark-bg-subtle': 'rgba(13, 40, 71, 0.6)',
        'dark-bg-ui': '#0077FF3A',
        'dark-bg-ui-hover': '#0075FF57',
        'dark-bg-ui-active': '#004074',
        'dark-border-subtle': '#104D87',
        'dark-border-ui': '#205D9E',
        'dark-border-ui-hover': '#3094FEB9',
        'dark-bg-solid': '#0090FF',
        'dark-bg-solid-hover': '#3B9EFF',
        'dark-text-low': '#70B8FF',
        'dark-text-high': '#C2E6FF',
        'dark-bg-modal': 'rgba(13, 40, 71, 0.9)',
      },
      "animation": {
        "border-width": "border-width 3s infinite alternate"
      },
      "keyframes": {
        "border-width": {
          "from": {
            "width": "10px",
            "opacity": "0"
          },
          "to": {
            "width": "100px",
            "opacity": "1"
          }
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
}
