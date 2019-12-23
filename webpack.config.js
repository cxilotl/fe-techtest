const path = require('path');

const APP_PATHS = {
  SRC_DIR: path.join(__dirname, 'src')
};

module.exports =  () => {

  return {
    entry: {
      app: [`${APP_PATHS.SRC_DIR}/index.js`]
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/assets/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.module\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
        },
        {
          test: /\.(css|scss)$/,
          exclude: /\.module\.(css|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
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
      extensions: ['*', '.js', '.jsx', '.scss']
    },
    devtool: 'inline-source-map',
  };
};
