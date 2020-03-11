const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
const glob =require('webpack-glob-entry')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
 

function nuevo() {
  let plugins = [] ,path= glob('./public/*.html');
  ///  exportar  css
  plugins.push(new MiniCssExtractPlugin({filename: 'css/[name].css', chunkFilename: '[id].css',}));
  /// configuracion de phaser ****importante***
  plugins.push(new webpack.DefinePlugin({ CANVAS_RENDERER: JSON.stringify(true), WEBGL_RENDERER: JSON.stringify(true)})); 
  /// sirve para llamar los html y minificarlo
  for (key in path) { var filename=path[key].toString().replace('./','');plugins.push( new HtmlWebpackPlugin( {filename:key.toString()+'.html', template: filename, chunks:[key.toString()],}));}
 plugins.push(
  new CopyWebpackPlugin([

    // Copy directory contents to {output}/to/directory/
    //{ from: 'from/directory', to: 'to/directory' },
    { from: 'public', to: 'www/' },
]
 ));
 plugins.push(
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
);
  return plugins
}
 
module.exports={
  entry: glob('./src/type/**/*.{tsx,ts,js,jsx}'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        loader: "babel-loader",
        options: {
          babelrc:true
        }
      },
      {
        test: /\.css$/,
        use: [ { loader: MiniCssExtractPlugin.loader, options: {publicPath: 'www/css',},},
            'css-loader',],
      },
      { 
        test: /\.(scss|sass)$/, 
        loader: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
 
      ,{
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ]
  },

  optimization :{
    splitChunks: {

     //separamos librerias pesadas en archivos individales(no olvide agregarlas manualmente al HTML respectivo)
     cacheGroups: {
      react: {
      test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
      name: 'react',
      filename:'js/[name].js',
      chunks: 'all',
      },
    phaser: {
     test: /[\\/]node_modules[\\/](phaser)[\\/]/,
     filename:'js/phaser.js',
     name: 'phaser',
     chunks: 'all',
     }
    }
  }},
  resolve: {
    modules: ['node_modules'],
    plugins: [   /*  new DirectoryNamedWebpackPlugin() */ ],
    extensions: [".js",".jsx",".ts",".tsx"] 
  },
  output: {
    path: path.resolve(__dirname, "www"),
    filename: "js/[name].js",
    chunkFilename: '[id].chunk.js',
  
  }
  ,plugins: nuevo(),
  
 
}

 