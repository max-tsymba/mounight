module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    important: true,
    darkMode: 'class', // or 'media' or 'class'
    theme:{
        colors: {
            'current': 'currentColor',
            'transparent': 'transparent',
            'white': {
                DEFAULT: 'white',
            },
            'black' : {
                DEFAULT: 'black',
            },
        },
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1240px',
        },
        container: {
            center: true,
            padding: '15px',
            screens: {
              'desktop': '1270px',
            },
        },
        fontSize: {
        },
        lineHeight: {
        },
        borderRadius: {
        },
        fontFamily: {
            default: ['Roboto', 'sans-serif'],
        },
        spacing: {
        },
        maxWidth: {
            'full': '100%',
        },
        minWidth: {
        },
        maxHeight: {

        },
        minHeight: {
            'screen': '100vh',
        },
        extend: {
            width:{
            },
            height:{

            },
            boxShadow:{
            }
        },
    },
    variants:{
        extend: {
            margin: ['last'],
        },
    },
    plugins: [],
}