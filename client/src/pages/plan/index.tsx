import { FC } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import PageLayout from 'src/components/templates/page-layout'

const PlanPage: FC = () => {
  return <div>PlanPage</div>
}

export default withTemplate(PlanPage, PageLayout)
