# Webpack v4 migrate to v5

## config

### webpack

webpack v4 update to v5;

### webpack-cli and webpack-dev-server

webpack-cli v3 update to v4;

setup command change, use `webpack serve` to run `webpack-dev-server`.

```
- "dev": "webpack --config build/webpack.config.dev.js",
+ "dev": "webpack serve --config build/webpack.config.dev.js",
```

### webpack-merge

webpack-merge v4 update to v5;

import module change;

```
- const merge = require('webpack-merge');
+ const { merge } = require('webpack-merge');
```

### config file

devtool value change;

```
- devtool: 'cheap-module-eval-source-map',
+ devtool: 'eval-cheap-module-source-map',
```

### copy-webpack-plugin

copy-webpack-plugin v5 update to v6;

api change;

```
- new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '../src/static'),
      to: path.resolve(__dirname, '../dist/static'),
      ignore: ['.*'],
    },
  ]),

+ new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../src/static'),
        to: path.resolve(__dirname, '../dist/static'),
        toType: 'dir',
      },
    ],
  }),
```

### others

update to latest version;
