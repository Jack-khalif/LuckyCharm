const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = require('../next.config');

module.exports = withBundleAnalyzer({
  ...nextConfig,
  webpack(config, { isServer }) {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: `../.next/analyze/${isServer ? 'server' : 'client'}.html`,
        })
      );
    }
    return config;
  },
});
