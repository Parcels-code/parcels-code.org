import { Link } from '@/components/mdx'
import { Icon, VisuallyHidden } from '@chakra-ui/react'

export const SocialLink = ({ icon: IconComponent, href, label }) => {
  return (
    <Link
      display='inline-flex'
      alignItems='center'
      justifyContent='center'
      rounded='full'
      href={href}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon fontSize='xl' color='accent'>
        <IconComponent />
      </Icon>
    </Link>
  )
}
