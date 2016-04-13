module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8080,
    inline: true,
    host: '0.0.0.0',
    watch: true
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    poll: 5000
  }
};
