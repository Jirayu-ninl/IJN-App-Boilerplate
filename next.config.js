/* eslint-disable @typescript-eslint/no-var-requires */
// If such a type existed...
const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const plugins = require('next-compose-plugins')
const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  webpack(config, { webpack }) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      })
    )

    config.resolve.alias['@app'] = path.join(__dirname, 'app')
    config.resolve.alias['@config'] = path.join(__dirname, 'app/config')
    config.resolve.alias['@auth'] = path.join(__dirname, 'app/auth')
    config.resolve.alias['contents'] = path.join(
      __dirname,
      'resources/contents'
    )
    config.resolve.alias['views'] = path.join(__dirname, 'resources/views')
    config.resolve.alias['layouts'] = path.join(
      __dirname,
      'resources/views/layouts'
    )
    config.resolve.alias['pages'] = path.join(
      __dirname,
      'resources/views/pages'
    )
    config.resolve.alias['@models'] = path.join(__dirname, 'app/models')
    config.resolve.alias['@database'] = path.join(
      __dirname,
      'app/models/database'
    )
    config.resolve.alias['@libs'] = path.join(__dirname, 'libs')
    config.resolve.alias['@contexts'] = path.join(__dirname, 'app/contexts')
    config.resolve.alias['@store'] = path.join(__dirname, 'app/store')
    config.resolve.alias['public'] = path.join(__dirname, 'public')

    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'media.graphcms.com',
      'media.graphassets.com',
      'avatars.githubusercontent.com',
      'platform-lookaside.fbsbx.com',
      'lh3.googleusercontent.com',
    ],
  },
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public',
    runtimeCaching,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
}

// manage i18n
if (process.env.EXPORT !== 'true') {
  nextConfig.i18n = {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  }
}

module.exports = plugins(
  [[withSentryConfig, sentryWebpackPluginOptions], withBundleAnalyzer, withPWA],
  nextConfig
)
