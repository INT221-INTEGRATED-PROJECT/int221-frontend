module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				deepBlue: "#13315C",
				skyBlue: "#134074",
			},
			fontFamily: {
				dosis: ['"Dosis"', "sans-serif"],
				playfairdisplay: ['"Playfair Display"', "serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
