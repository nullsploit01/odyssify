import './index.css'
import { Button, Col, DatePicker, Divider, Input, Row } from 'antd'
import { Dayjs } from 'dayjs'
import { FC, useState } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import PageLayout from 'src/components/templates/page-layout'
import { itineraryService } from 'src/services/api/itinerary'

const { RangePicker } = DatePicker
interface IDateRange {
  from: Date
  to: Date
}

const PlanPage: FC = () => {
  const [location, setLocation] = useState<string>('')
  const [dateRange, setDateRange] = useState<IDateRange>({} as IDateRange)

  const handleRangeChange = (dates: [Dayjs | null, Dayjs | null]) => {
    if (!dates || dates.length < 2 || !dates[0] || !dates[1]) {
      return
    }

    setDateRange({ from: dates[0].toDate(), to: dates[1].toDate() })
  }

  const startPlanning = () => {
    if (!location || !dateRange.from || !dateRange.to) {
      return
    }

    itineraryService.getItinerary(location, dateRange.from, dateRange.to)
  }

  return (
    <Row
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Col lg={6}>
        <Input
          size="large"
          allowClear
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="eg Bali, Paris"
          prefix={<b style={{ margin: '10px 5px' }}>Where To?</b>}
        />
        <Divider />
        <RangePicker
          onChange={handleRangeChange}
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
