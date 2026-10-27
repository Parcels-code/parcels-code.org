import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import '@fontsource-variable/inter'

const config = defineConfig({
  globalCss: {
    html: { scrollBehavior: 'smooth' },
  },
  theme: {
    tokens: {
      fonts: {
        body: {
          value:
            "'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        },
        heading: {
          value: "'Inter Variable', 'Work Sans', system-ui, sans-serif",
        },
      },
      sizes: {
        // Chakra UI v2's container sizes, still used for page widths
        container: {
          sm: { value: '640px' },
          md: { value: '768px' },
          lg: { value: '1024px' },
          xl: { value: '1280px' },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Keep Chakra UI v2's dark-mode page background (gray.800), which the
        // translucent header and mobile nav are tinted to match.
        bg: {
          DEFAULT: { value: { _light: '{colors.white}', _dark: '#1A202C' } },
        },
        // v2's border colour; v3's dark border is barely visible on gray.800
        border: {
          DEFAULT: {
            value: { _light: '{colors.gray.200}', _dark: '{colors.whiteAlpha.300}' },
          },
        },
      },
    },
    recipes: {
      // v2 containers used a constant 1rem horizontal padding
      container: {
        base: { px: '4' },
      },
      // v3 links are inline-flex and use the palette's foreground colour.
      // Restore v2's behaviour (inline, so long links inside paragraphs can
      // wrap, and inheriting the surrounding text colour).
      link: {
        base: { display: 'inline' },
        variants: {
          variant: {
            plain: { color: 'inherit' },
            underline: { color: 'inherit' },
          },
        },
      },
      // Keep Chakra UI v2's responsive heading scale (v3 maps each size to a
      // single, much smaller text style).
      heading: {
        base: { fontWeight: 'bold' },
        variants: {
          size: {
            '4xl': { fontSize: { base: '6xl', md: '7xl' }, lineHeight: 1 },
            '3xl': { fontSize: { base: '5xl', md: '6xl' }, lineHeight: 1 },
            '2xl': {
              fontSize: { base: '4xl', md: '5xl' },
              lineHeight: { base: 1.2, md: 1 },
            },
            xl: {
              fontSize: { base: '3xl', md: '4xl' },
              lineHeight: { base: 1.33, md: 1.2 },
            },
            lg: {
              fontSize: { base: '2xl', md: '3xl' },
              lineHeight: { base: 1.33, md: 1.2 },
            },
            md: { fontSize: 'xl', lineHeight: 1.2 },
            sm: { fontSize: 'md', lineHeight: 1.2 },
            xs: { fontSize: 'sm', lineHeight: 1.2 },
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
