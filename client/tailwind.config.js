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
                'transition': 'rgba(0, 0, 0, 0.25)',
            },
            'red': '#F05454'
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
              'desktop': '1290px',
            },
        },
        fontSize: {
            'ns': '10px',
            's': '14px',
            'sm': '16px',
            'm': '18px',
            'md': '20px',
            'xs': '36px',
            'xl': '52px',
        },
        lineHeight: {
            '12': '1.2',
        },
        borderRadius: {
            'r30': '30px',
            'r50%': '50%',
        },
        fontFamily: {
            default: ['Roboto', 'sans-serif'],
        },
        spacing: {
            '0': '0px',
            '4': '4px',
            '10': '10px',
            '12': '12px',
            '20': '20px',
            '40': '40px',
            '48': '48px',
            '90': '90px',
            '120': '120px',
        },
        maxWidth: {
            '300': '300px',
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
                '150': '150px',
                '200': '200px',
            },
            height:{

            },
            boxShadow:{
                DEFAULT: '0px 4px 6px rgba(0, 0, 0, 0.25)',
            }
        },
    },
    variants:{
        extend: {
            margin: ['last'],
            backgroundColor: ['hover'],
            textColor: ['hover'],
        },
    },
    plugins: [],
}