const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//console.log(__dirname);

module.exports = (env) =>{
    const isProduction = env === 'production';
    
    return {
        mode: isProduction ? env : 'development',
        entry: "./src/app.js",
        // optimization: {
        //     splitChunks: {
        //       cacheGroups: {
        //         styles: {
        //           name: 'styles',
        //           test: /\.css$/,
        //           chunks: 'all',
        //           enforce: true,
        //         },
        //       },
        //     },
        //   },
        plugins: [
            new MiniCssExtractPlugin({
              filename: 'styles.css',
            }),
          ],
        output: {
            path: path.join(__dirname, 'public','dist'),
            filename: "bundle.js"
        },
        module:{
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node-modules/, 
            }, {
                test: /\.s?css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader
                    },
                    //'style-loader',
                    {
                      loader:'css-loader',
                      options: {
                        sourceMap: true
                      }
                    },
                    {
                      loader: 'sass-loader', 
                      options: {
                        sourceMap: true
                      }
                    }
                ]
            }]
        },
        devtool: isProduction ? 'source-map' :'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'), 
            historyApiFallback: true, 
            publicPath: '/dist/'
        }
    }
};
