module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '67',
          ie: '11'
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
}
