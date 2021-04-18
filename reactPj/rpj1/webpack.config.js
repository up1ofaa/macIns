var webpack=require('webpack'); //webpack 불러오기
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path      =require('path'); //


module.exports ={
    mode : 'development',
    entry: './src/index.js',            //합칠파일. 전달할파일

    output:{
      path: path.resolve(__dirname, 'public'),
      publicPath: '/public/',
      filename:'bundle.js'              //output으로 내놓는 파일 추후 script src=""로 가져와서 쓰게된다.
    },
    devServer:{                         //게빌서버의 설정
        hot:true,                       //리로딩할때마다
        inline:true,
        host: '127.0.0.1',              //기본값은 로컬ip
        port: 8080,                     //개발서버의 포트
        open: true,                     // open page when start
        contentBase:__dirname+'/public/'//index파일의 위치
    },
    module:{
        rules: [
            {
                test:/\.js|jsx$/,        
                exclude:/node_modules/,
                //use: ['babel-loader']
                /*loader: 'babel-loader',
                options: {
                    plugins:['react-hot-loader/babel'],
                    cacheDirectory:true
                }*/
                use: [
                    {
                        loader: 'babel-loader',
                        options: { plugins: [ 'react-refresh/babel' ] }
                    }
                ]
              }            
        ]
    },

    plugins:[// 자동으로 리로딩하는 기능()
       /* new webpack.DefinePlugin({ 
            'process.env.NODE_ENV': JSON.stringify('development')
        })
        */
         new webpack.HotModuleReplacementPlugin() //새로고침시 변경된사항 적용
        ,new ReactRefreshWebpackPlugin()
    ]

};
