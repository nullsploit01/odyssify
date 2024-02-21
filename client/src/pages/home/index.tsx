import { FC } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import PageLayout from 'src/components/templates/page-layout'

const HomePage: FC = () => {
  return <div>Home Page</div>
}

const HomePageWithTemplate = withTemplate(HomePage, PageLayout)

export default HomePageWithTemplate
