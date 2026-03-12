import { Box, Container, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

import { Heading } from '@/components/mdx'
import { ProjectCard } from '@/components/project-card'
import { Projects as ProjectsData } from '@/data/projects'

export const Projects = () => {
  const projects = React.useMemo(() => ProjectsData, [])
  const projectsPerRowLg = 3
  const remainderLg = projects.length % projectsPerRowLg
  const lastRowStartIndexLg = projects.length - remainderLg

  const getLgColStart = (index) => {
    if (remainderLg === 1 && index === lastRowStartIndexLg) {
      return 3
    }

    if (remainderLg === 2) {
      if (index === lastRowStartIndexLg) return 2
      if (index === lastRowStartIndexLg + 1) return 4
    }

    return undefined
  }

  return (
    <Box id={'projects'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Projects
        </Heading>

        <Box my={8}>
          <Text fontSize={'lg'}>
            This section lists some of the standalone packages and projects
            developed with Parcels.
          </Text>

          <Grid
            my={8}
            templateColumns={{
              base: 'repeat(1, minmax(0, 1fr))',
              md: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(6, minmax(0, 1fr))',
            }}
            gap={8}
            w='full'
            alignItems='stretch'
          >
            {projects.map((project, index) => (
              <GridItem
                key={index}
                colSpan={{ base: 1, md: 1, lg: 2 }}
                colStart={{ lg: getLgColStart(index) }}
                h='full'
              >
                <ProjectCard
                  name={project.name}
                  logo_light={project.logo_light}
                  logo_dark={project.logo_dark}
                  description={project.description}
                  repo={project.repo}
                  homepage={project.homepage}
                ></ProjectCard>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
