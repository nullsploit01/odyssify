import './index.css'
import { Button, Col, DatePicker, Divider, Input, Row } from 'antd'
import { FC } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import PageLayout from 'src/components/templates/page-layout'
import { itineraryService } from 'src/services/api/itinerary'
import { useItineraryStore } from 'src/stores/use-itinerary'

const { RangePicker } = DatePicker

const PlanPage: FC = () => {
  const { location, dateRange, updateLocation, updateDateRange } = useItineraryStore()

  const startPlanning = () => {
    if (!location || !dateRange || !dateRange.from || !dateRange.to) {
      return
    }

    itineraryService.getItinerary(location, dateRange.from, dateRange.to)
  }

  return (
    <Row style={{ display: 'flex', placeContent: 'center' }}>
      <Col xxl={6} lg={8} md={10}>
        <Input
          size="large"
          allowClear
          value={location}
          onChange={(e) => updateLocation(e.target.value)}
          placeholder="eg Bali, Paris"
          prefix={<b style={{ margin: '10px 5px' }}>Where To?</b>}
        />
        <Divider />
        <RangePicker
          onChange={updateDateRange}
          style={{ width: '100%', padding: '15px 10px' }}
          size="large"
        />
        <div style={{ margin: '3rem', textAlign: 'center' }}>
          <Button onClick={startPlanning} type="dashed" size="large">
            Start Planning
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default withTemplate(PlanPage, PageLayout)
