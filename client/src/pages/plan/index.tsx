import './index.css'
import {
  ClockCircleOutlined,
  QuestionCircleTwoTone,
  RightCircleOutlined,
  RobotOutlined,
  TagOutlined
} from '@ant-design/icons'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import {
  Button,
  Col,
  Collapse,
  CollapseProps,
  DatePicker,
  Divider,
  Input,
  Row,
  Typography
} from 'antd'
import { FC, Fragment } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import LoginButton from 'src/components/molecules/login-button'
import PageLayout from 'src/components/templates/page-layout'
import { useItineraryStore } from 'src/stores/use-itinerary'

const { RangePicker } = DatePicker

const PlanPage: FC = () => {
  const {
    location,
    loading,
    isInvalid,
    dateRange,
    itinerary,
    updateLocation,
    updateDateRange,
    updateItinerary
  } = useItineraryStore()

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
          <Input
            size="large"
            allowClear
            required
            status={isInvalid.location ? 'error' : undefined}
            value={location}
            onChange={(e) => updateLocation(e.target.value)}
            placeholder="eg Bali, Paris"
            prefix={<b style={{ margin: '10px 5px' }}>Where To?</b>}
          />
          <Divider />
          <RangePicker
            required
            status={isInvalid.dateRange ? 'error' : undefined}
            onChange={updateDateRange}
            style={{ width: '100%', padding: '15px 10px' }}
            size="large"
            value={[dateRange.from, dateRange.to]}
          />
          <div style={{ margin: '2rem', textAlign: 'center' }}>
            <SignedIn>
              <Button
                onClick={updateItinerary}
                style={{ color: '#fa541c', fontSize: '1.2rem' }}
                loading={loading}
                disabled={loading}
                type="link"
                size="large"
              >
                {loading ? (
                  <>Beep Boop! Please wait.</>
                ) : (
                  <>
                    Generate Itinerary with AI <RobotOutlined />
                  </>
                )}
              </Button>
            </SignedIn>
            <SignedOut>
              <LoginButton
                label="Start Planning"
                type="link"
                size="large"
                style={{ color: '#fa541c', fontSize: '1.2rem' }}
              />
            </SignedOut>
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
