var webpack = require('webpack')

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ], //entry point for webpack
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js' //output for webpack
  },
  resolve: {
    root: __dirname,
    alias: {// changes the path to user require('Greeter') instead of require('./components/Greeter') 
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      applicationStyles: 'app/styles/app.scss',
      About: 'app/components/About.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [// allows for webpack to handle .jsx
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,// regex to apply babel loader to all .jsx files
        exclude: /(node_modules|bower_components)/ // exludes these files so they are not run through webpack
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map' // source maps for debugging
}
