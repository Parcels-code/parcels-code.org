import { Avatar } from '@chakra-ui/react'

// Avatar for a blog post author, using their GitHub profile picture
export const AuthorAvatar = ({ author, ...props }) => {
  return (
    <Avatar.Root {...props}>
      <Avatar.Fallback name={author.name} />
      <Avatar.Image src={`https://github.com/${author.github}.png`} />
    </Avatar.Root>
  )
}
