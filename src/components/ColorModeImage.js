// So that we can easily use different images for light and dark mode
import { Image } from '@chakra-ui/react'

// Both images are rendered and toggled with the `_dark` CSS condition, so the
// statically exported HTML is correct before React hydrates (the colour mode
// is only known on the client).
export function ColorModeImage({ lightSrc, darkSrc, alt, ...props }) {
  if (!darkSrc || darkSrc === lightSrc) {
    return <Image src={lightSrc} alt={alt} {...props} />
  }

  return (
    <>
      <Image src={lightSrc} alt={alt} {...props} _dark={{ display: 'none' }} />
      <Image
        src={darkSrc}
        alt={alt}
        {...props}
        display='none'
        _dark={{ display: 'block' }}
      />
    </>
  )
}
