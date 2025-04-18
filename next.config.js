const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  // Export output
  output: "export",
  images: {
      unoptimized: true
  },
  basePath: '/docs',
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

module.exports = withNextra(nextConfig)

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
