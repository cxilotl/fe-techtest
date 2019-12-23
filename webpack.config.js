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
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
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
