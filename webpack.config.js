const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const csso = require("optimize-css-assets-webpack-plugin");
const path = require('path');

module.exports = {
    entry:"./src/js/index.js",//input file
    output: {
        path: path.resolve(__dirname, 'build'),//The folder name of the output files
        filename: 'js/bundle.js',//Output file name (js)
      },
      devServer:{
        static: {

            directory: path.join(__dirname, 'build'),
    
        },
        port:1000,
        devMiddleware: {
            writeToDisk: true
         },
         hot: false,
         liveReload: true,
         open: true,
      },
      module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",//It will translate sass to css
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
						generator : {
                  filename : 'assets/images/[name][ext][query]',
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator : {
                 filename : 'assets/fonts/[name][ext][query]',
             }
          },
         {

           test: /\.html$/i,

           loader: 'html-loader',
           

         },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",//Html input file path
            filename:"index.html",//Html output file name
        }),
        new MiniCssExtractPlugin({
            filename:"css/style.css"
         }),
        new csso({}),
  ],
};