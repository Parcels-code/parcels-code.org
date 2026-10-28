import nextMDX from "@next/mdx"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    // Turbopack (the default bundler since Next.js 16) can only pass
    // serializable options to loaders, so plugins are referenced by name.
    rehypePlugins: ["rehype-slug"],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
    format: 'mdx',
  },
})

const nextConfig = {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: ["raw.githubusercontent.com", "numpy.org", "dask.org", "chainer.org"].map(
      (hostname) => ({ protocol: "https", hostname })
    ),
  },
  output: 'export'
}

export default withMDX(nextConfig)
