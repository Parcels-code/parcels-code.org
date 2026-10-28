import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { LuExternalLink } from 'react-icons/lu'

export const Link = React.forwardRef(function CustomLink(props, ref) {
  const { href, useExternalIcon, children, ...rest } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <ChakraLink asChild {...rest}>
        <NextLink ref={ref} href={href}>
          {children}
        </NextLink>
      </ChakraLink>
    )
  }

  return (
    <ChakraLink asChild {...rest}>
      <NextLink ref={ref} href={href} target='_blank' rel='noopener noreferrer'>
        {children}
        {useExternalIcon && (
          <LuExternalLink style={{ display: 'inline', margin: '0 2px' }} />
        )}
      </NextLink>
    </ChakraLink>
  )
})
