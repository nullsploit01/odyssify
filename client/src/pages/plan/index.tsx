import './index.css'
import { Button, Col, DatePicker, Divider, Input, Row } from 'antd'
import { FC } from 'react'

import withTemplate from 'src/components/hoc/with-template'
import PageLayout from 'src/components/templates/page-layout'

const PlanPage: FC = () => {
  return (
    <Row style={{ display: 'flex', justifyContent: 'center' }}>
      <Col lg={6}>
        <Input
          size="large"
          allowClear
          placeholder="eg Bali, Paris"
          prefix={<b style={{ margin: '10px 5px' }}>Where To?</b>}
        />
        <Divider />
        <DatePicker.RangePicker style={{ width: '100%', padding: '15px 10px' }} size="large" />
        <div style={{ margin: '3rem', textAlign: 'center' }}>
          <Button type="dashed" size="large">
            Start Planning
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default withTemplate(PlanPage, PageLayout)
