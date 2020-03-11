//const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
const glob =require('webpack-glob-entry')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

   /***
     * @function Sirve para generar los pluguins necesarios 
     */
function nuevo() {
    let plugins = [] ,path= glob('./public/**/*.html');
    ///  exportar  css desde archivos js
    plugins.push(new MiniCssExtractPlugin({filename: 'css/[name].css', chunkFilename: '[id].css',}));
    /// configuracion de phaser ****importante***
    plugins.push(new webpack.DefinePlugin({ CANVAS_RENDERER: JSON.stringify(true), WEBGL_RENDERER: JSON.stringify(true)})); 
    /// sirve para llamar los html y minificarlo
    for (key in path) { var filename=path[key].toString().replace('./','');plugins.push( new HtmlWebpackPlugin( {filename:key.toString()+'.html', template: filename, chunks:[key.toString()],minify:{ removeComments: false, removeRedundantAttributes: true,removeScriptTypeAttributes: true,removeStyleLinkTypeAttributes: true,useShortDoctype: true}}));}
    plugins.push( new CleanWebpackPlugin());
    plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    );
   /***
    *  plugins.push(new BrowserSyncPlugin(
      {
        server:"./www",
        port:9000
      },

      { reload: false }
      )); 

    */
   plugins.push(
    new CopyWebpackPlugin([
  
      // Copy directory contents to {output}/to/directory/
      //{ from: 'from/directory', to: 'to/directory' },
      {
         from: 'public/image'
      , to: '' },
  ]
   ));
    return plugins
}
module.exports={
  entry: glob('./src/type/**/*.{tsx,ts,js,jsx}'),
  devtool: 'source-map',
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
        test: /\.scss$/, 
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

 /**
    minimizer: [ new UglifyJsPlugin({ 
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }), ] ,
 */ 
    splitChunks: {
      cacheGroups: {
        react: {
        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        name: 'react',
        filename:'lib/[name].js',
        chunks: 'all',
        },
      phaser: {
       test: /[\\/]node_modules[\\/](phaser)[\\/]/,
       filename:'lib/phaser.js',
       name: 'phaser',
       chunks: 'all',
       }
      }
    }
 
  },
  resolve: {
    modules: ['node_modules'],
    plugins: [   /*  new DirectoryNamedWebpackPlugin() */ ],
    extensions: [".js",".jsx",".ts",".tsx"] 
  },
  output: {
    path: path.resolve(__dirname, "www/"),
    filename: "js/[name].js",
    chunkFilename: '[id].chunk.js'
  }
  ,plugins: nuevo(),
 /***
  *  devServer: {
    contentBase: path.join(__dirname, 'www'),
    compress: true,
    port: 9000
  } 
  */
}