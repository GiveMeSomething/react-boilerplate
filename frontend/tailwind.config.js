const aspectRatio = require('@tailwindcss/aspect-ratio')

module.exports = {
    purge: ['./public/**/*.html', './src/**/*.tsx'],
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    darkMode: false, // or 'media' or 'class'
    plugins: [aspectRatio]
}
