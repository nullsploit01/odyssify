import './index.css'
import {
  ClockCircleOutlined,
  QuestionCircleTwoTone,
  RightCircleOutlined,
  RobotOutlined,
  TagOutlined
} from '@ant-design/icons'
import { Col, Collapse, CollapseProps, Divider, Row, Typography } from 'antd'
import { FC, Fragment, lazy } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import { useItineraryStore } from 'src/stores/use-itinerary'

const AuthProtectedButton = lazy(() => import('src/components/molecules/auth-protected-button'))
const ItineraryDateRangePicker = lazy(
  () => import('src/components/organisms/itinerary-date-range-picker')
)
const LocationSearchBar = lazy(() => import('src/components/organisms/location-search-bar'))
const PageLayout = lazy(() => import('src/components/templates/page-layout'))

const PlanPage: FC = () => {
  const { loading, itinerary, updateItinerary } = useItineraryStore()

  const getCollapseItems = (idx: number) => {
    const collapseItineraryItem = itinerary.filter((_, _idx) => idx === _idx)
    const collapseItem: CollapseProps['items'] = collapseItineraryItem.map((_item, _idx) => {
      return {
        key: _idx,
        label: _item.day,
        children: (
          <Fragment>
            {_item.activities.map((activity) => {
              return (
                <Fragment>
                  <Typography.Title level={4}>
                    <ClockCircleOutlined style={{ marginRight: '0.5rem' }} />
                    {activity.time}
                  </Typography.Title>
                  <div>
                    <Typography.Text strong italic>
                      <RightCircleOutlined style={{ marginRight: '0.5rem' }} />
                      {activity.name}
                    </Typography.Text>
                  </div>
                  <Typography.Text>
                    <TagOutlined style={{ marginRight: '0.5rem' }} />
                    {activity.location}
                  </Typography.Text>
                  <Typography.Paragraph>
                    <QuestionCircleTwoTone style={{ marginRight: '0.5rem' }} />
                    {activity.description}
                  </Typography.Paragraph>
                </Fragment>
              )
            })}
          </Fragment>
        )
      }
    })

    return collapseItem
  }

  return (
    <div>
      <Row style={{ display: 'flex', placeContent: 'center' }}>
        <Col xxl={6} lg={8} md={10}>
          <LocationSearchBar />
          <Divider />
          <ItineraryDateRangePicker style={{ width: '100%', padding: '15px 10px' }} />
          <div style={{ margin: '2rem', textAlign: 'center' }}>
            <AuthProtectedButton
              signedInLabel={
                loading ? (
                  <Fragment>Beep Boop! Please wait.</Fragment>
                ) : (
                  <Fragment>
                    Generate Itinerary with AI <RobotOutlined />
                  </Fragment>
                )
              }
              signedOutLabel="Start Planning"
              shouldSignIn
              size="large"
              style={{ color: '#fa541c', fontSize: '1.2rem' }}
              loading={loading}
              disabled={loading}
              onClick={updateItinerary}
              type="link"
            />
          </div>
        </Col>
      </Row>
      <Row style={{ display: 'flex', placeContent: 'center' }}>
        <Col lg={12}>
          {itinerary &&
            itinerary.map((_, idx) => {
              return <Collapse style={{ margin: '2rem' }} key={idx} items={getCollapseItems(idx)} />
            })}
        </Col>
      </Row>
    </div>
  )
}

export default withTemplate(PlanPage, PageLayout)
