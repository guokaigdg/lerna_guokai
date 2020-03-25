module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ["./demo/src/index.js"]
      };
      config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx", ".json"];
      config.module.rules.push(
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
          // loader: "ts-loader"
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            },
            {
              loader: "less-loader"
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000 //以字节为单位，小于该大小的图片编译成base64
                // name: "pub/[name]-[hash].[ext]" //所有图片打包到images目录
              }
            }
          ]
        }
        // {
        //   test: /\.json$/,
        //   loader: "json-loader"
        // }
      );

      return config;
    }
  }
};
