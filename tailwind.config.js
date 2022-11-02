/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  "din-display": ["PF DinDisplay Pro"],
		  "sf-pro-display": ["SF Pro Display", "sans-serif"],
		  "sf-pro-text": ["SF Pro Text", "sans-serif"],
		  "sf-pro-rounded": ["SF Pro Rounded", "sans-serif"],
		},
		backgroundImage: {
		  "cloud-black": `linear-gradient(
			254.67deg,
			rgba(0, 0, 0, 0.39) -3.46%,
			rgba(7, 31, 41, 0.39) 57.01%,
			rgba(0, 0, 0, 0) 128.9%
		  ),
		  linear-gradient(0deg, rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 0.8))`,
		  "gas-slider": `linear-gradient(270deg, #8ED336 0%, #FCC73D 111.54%)`,
		  "shadow-gradient": `linear-gradient(90deg, rgba(19, 23, 25, 0.85), rgba(19, 23, 25, 0))`,
		  "char-creator-image": `url('@/assets/images/charCreator/identiyBackground2.png')`,
		  "char-creator-gradient": `linear-gradient(
			254.67deg,
			rgba(0, 0, 0, 0.65) -3.46%,
			rgba(7, 31, 41, 0.3445) 57.01%,
			rgba(0, 0, 0, 0) 128.9%
		  ),
		  rgba(13, 13, 13, 0.9)`,
		},
		colors: {
		  bg1: "#111212",
		  bgp1: "rgba(21, 21, 21, 0.35)",
		  bgp2: "rgba(24, 24, 24, 1)", //#181818
		  bgp3: "rgba(118, 118, 128)", //#767680
		  bgp4: "#1C1C1E",
		  bgp5: '#0F0F0F',
		  bgp6: '#111111',
		  bgp7: '#333333',
		  t1: "#222222",
		  t2: "#0B0B0B",
		  t3: "#ababab",
		  t4: '#242424',
		  c1: "#8ED336",
		  c2: "#09A4FC",
		  c3: "#F42728",
		  c4: "rgba(216, 173, 90, 1)",
		  c5: "#D8AD5A",
		  c6: "#F8B304",
		  cp1: "#FF3B30",
		  cp2: "#34C759",
		  cp3: 'rgb(10, 132, 255)',
		  cp4: '#30D158',
		  tp1: "#EBEBF5",
		  tp2: '#5A5A5E',
		  tp3: '#0A84FF',
		},
		boxShadow: {
		  switch: "inset -21px 0 0 0 #2A2A2D",
		  'switch-checked': 'inset 21px 0 0 0 #65C366',
		  "switch-btn":
			"0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06)",
		},
	  },
	},
	plugins: [],
  };