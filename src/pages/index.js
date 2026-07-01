import { Projects, Features, HeroBanner, Funders } from '@/components'

import { Layout } from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout
      url={`/`}
      title={'Parcels: A highly customisable Lagrangian simulation framework'}
      card={
        'https://raw.githubusercontent.com/Parcels-code/parcels-code.org/main/public/parcels-assets/logo-no-text.png'
      }
      // enableBanner
    >
      <HeroBanner />
      <Features />
      <Projects />
      <Funders />
    </Layout>
  )
}
