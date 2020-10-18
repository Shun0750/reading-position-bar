const presets  = [
  [
    '@babel/preset-env',
    {
      "targets": [">0.25% in JP", "not ie <= 10", "not op_mini all"]
    }
  ]
];
module.exports = {
  mode   : 'development',
  devtool: 'inline-source-map',
  entry  : './src/app.js',
  output : {
    path  : `${__dirname}/dist`,
    filename: 'reading-position-bar.js'
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        use : [
          {
            loader : 'babel-loader',
            options: {
              presets: presets
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          }
        ]
      }
    ]
  }
};
