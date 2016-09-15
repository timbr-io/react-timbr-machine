const babelSettings = {
  plugins: [
    'add-module-exports',
    'transform-regenerator',
    'transform-decorators-legacy',
    'transform-flow-strip-types'
  ],
  presets: [ 'es2015', 'react', 'stage-1' ]
};


module.exports = [{
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: './',
    libraryTarget: 'umd'
  },
  module : {
    loaders : [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: [`babel?${JSON.stringify( babelSettings )}`]
    }, { 
      test: /\.css$/, 
      loader: "style-loader?sourceMap!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]" 
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?name=fonts/[name].build-[hash].[ext]&limit=10000'
    }]
  }
}];
