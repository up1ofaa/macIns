var webpack=requre('webpack'); //webpack 불러오기

module.exports ={
    entry:'/src/index.js', //합칠파일
    output:{
        path:_dirname+'/public/',
        filename:'bundle.js' //output으로 내놓는 파일 추후 script src로 가져와서 쓰게된다.      
    },
    devServer:{
        hot:true,
        inline:true,
        host:'0.0.0.0',//기본값은 로컬ip
        port:4000,
        contentBase:_dirname+'/public/',
    },
    module:{
        loaders:[
            {test:/\.js$/,
                loader:'babel',
                exclude:/node_modules/,
                query:{
                    cacheDirectory:true,
                    presets:['es2015','react']
                }
            }
        ]
    },
    plugins:[// 자동으로 리로딩
        new webpack.HotModuleReplacementPlugin()
    ]
};