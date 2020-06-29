const path = require('path')

module.exports = {
  env: {
    ROOT: __dirname,
  },
  poweredByHeader: false,
  serverless: true,

  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = config.plugins.filter((plugin) => {
      return plugin.constructor.name !== 'ForkTsCheckerWebpackPlugin'
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve('./'),
    }
    return config
  },
}
