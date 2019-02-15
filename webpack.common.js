const Uglify = require("uglifyjs-webpack-plugin");
const jsxTransform = require('jsx-transform');

module.exports =  {
    entry: './src/index.js',
    output: {
        path: `${__dirname}/public`
    },
    plugins: [
    ],
    devtool: 'source-map',
    mode:'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [['@babel/preset-react']],
                    }
                }]
            }
        ]
    }
};