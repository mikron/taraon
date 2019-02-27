module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/public/scripts`
  },
  plugins: [],
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-react"]]
            }
          }
        ]
      }
    ]
  }
};
