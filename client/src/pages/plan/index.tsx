import './index.css'
import { RobotOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Divider, Input, Row } from 'antd'
import { FC } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import PageLayout from 'src/components/templates/page-layout'
import { useItineraryStore } from 'src/stores/use-itinerary'

const { RangePicker } = DatePicker

const PlanPage: FC = () => {
  const { location, loading, isInvalid, updateLocation, updateDateRange, updateItinerary } =
    useItineraryStore()

  return (
    <Row style={{ display: 'flex', placeContent: 'center' }}>
      <Col xxl={6} lg={8} md={10}>
        <Input
          size="large"
          allowClear
          required
          status={isInvalid ? 'error' : undefined}
          value={location}
          onChange={(e) => updateLocation(e.target.value)}
          placeholder="eg Bali, Paris"
          prefix={<b style={{ margin: '10px 5px' }}>Where To?</b>}
        />
        <Divider />
        <RangePicker
          required
          status={isInvalid ? 'error' : undefined}
          onChange={updateDateRange}
          style={{ width: '100%', padding: '15px 10px' }}
          size="large"
        />
        <div style={{ margin: '2rem', textAlign: 'center' }}>
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
        </div>
      </Col>
    </Row>
  )
}

export default withTemplate(PlanPage, PageLayout)
