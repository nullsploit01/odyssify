import { FC } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import Layout from 'src/components/templates/layout'

const HomePage: FC = () => {
  return <div>HomePaasasge</div>
}

const HomePageWithTemplate = withTemplate(HomePage, Layout)

export default HomePageWithTemplate
