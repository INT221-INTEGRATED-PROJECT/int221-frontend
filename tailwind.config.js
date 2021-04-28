module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				deepBlue: "#13315C",
				redc: "#C62121",
				bluec: "#003DBB",
				greenc: "#32612D",
				greyc: "#848484",
				orangec: "#FA6E09",
				yellowc: "#FFDB21",
				greyBorderc: "#6E6B6B",
			},
			fontFamily: {
				dosis: ['"Dosis"', "sans-serif"],
				playfairdisplay: ['"Playfair Display"', "serif"],
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["checked"],
			borderColor: ["checked"],
		},
	},
	plugins: [],
};
