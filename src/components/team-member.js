import { Image } from '@/components/mdx'
import { SocialLink } from '@/components/social-link'
import { Button, Card, Heading, Stack, Text } from '@chakra-ui/react'
import { IoIosGlobe, IoLogoGithub, IoLogoTwitter } from 'react-icons/io'
import { FaResearchgate } from 'react-icons/fa'
import { FaGoogleScholar } from 'react-icons/fa6'

const SocialLogos = {
  github: IoLogoGithub,
  twitter: IoLogoTwitter,
  researchgate: FaResearchgate,
  googlescholar: FaGoogleScholar,
  website: IoIosGlobe,
}

export const TeamMember = ({ member }) => {
  return (
    <Card.Root maxW='sm'>
      <Card.Body>
        {member.image && (
          <Image src={member.image} alt={member.name} borderRadius='lg' />
        )}
        <Stack mt='6' gap='3'>
          <Heading size='md'>{member.name}</Heading>
          <Heading size='sm'>{member.position}</Heading>
          {member.description && <Text>{member.description}</Text>}
        </Stack>
      </Card.Body>
      <Card.Footer>
        {member.links && (
          <Stack direction={'row'} align='center' gap={2}>
            {Object.entries(member.links).map(([key, href]) => {
              // Check if the link key exists in SocialLogos
              const LogoComponent = SocialLogos[key]
              return LogoComponent ? (
                <SocialLink
                  key={key}
                  href={href}
                  icon={LogoComponent}
                  label={`View ${member.name}'s ${key}`}
                />
              ) : (
                <Button
                  key={key}
                  rounded='full'
                  variant='outline'
                  onClick={() => window.open(href, '_blank')}
                >
                  {key}
                </Button>
              )
            })}
          </Stack>
        )}
      </Card.Footer>
    </Card.Root>
  )
}
