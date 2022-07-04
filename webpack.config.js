module.exports = {
  mode: 'development',
  resolve: { extensions: ['.jsx'] },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'swc-loader',
        options: {
          jsc: {
            parser: {
              jsx: true,
            },
          },
        },
      },
    ],
  },
};
