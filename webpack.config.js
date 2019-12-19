const path = require('path');

module.exports =  () => {

  return {
    entry: {
      app: ['./src/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/assets/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader'
          ]
        }
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devtool: 'inline-source-map',
  };
};
