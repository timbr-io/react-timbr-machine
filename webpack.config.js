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
      loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss-loader' 
    }, {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?name=fonts/[name].build-[hash].[ext]&limit=10000'
    }]
  },
  devtool: 'cheap-module-source-map',
  postcss: function() {
    return [
      require( 'postcss-modules-values' ),
      require( 'postcss-nested' )
    ];
  }
}];
