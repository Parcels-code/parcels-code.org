import { Box, Container, Text, Link, Grid, GridItem } from '@chakra-ui/react'
import { Tooltip } from '@/components/ui/tooltip'
import { ColorModeImage } from '@/components/ColorModeImage'
import React from 'react'
import { Funders as data } from '@/data/funders'

import { Heading } from '@/components/mdx'

export const Funders = () => {
  const funders = React.useMemo(() => data, [])
  return (
    <Box id={'funders'} as='section'>
      <Container maxW='container.lg' centerContent>
        <Heading as='h1' size='2xl'>
          Funders
        </Heading>

        <Box my={8}>
          <Text fontSize={'lg'}>
            Parcels development has been supported by the following
            organisations:
          </Text>

          <Grid
            templateColumns={`repeat(${funders.length}, minmax(auto, max-content))`}
            gap={6}
            my={4}
            justifyContent='center'
          >
            {funders.map((funder, index) => (
              <Tooltip key={index} content={funder.name}>
                <GridItem
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  borderRight={
                    index < funders.length - 1 ? '1px solid #ccc' : 'none'
                  }
                  pr={4}
                  asChild
                >
                  <Link href={funder.url}>
                    <ColorModeImage
                      lightSrc={funder.logo_light}
                      darkSrc={funder.logo_dark}
                      maxH={20}
                      alt={funder.name}
                    />
                  </Link>
                </GridItem>
              </Tooltip>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
