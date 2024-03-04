import './index.scss'
import { DatePicker } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import { FC, Fragment } from 'react'

export interface IDateRangePickerProps extends RangePickerProps {}

const DateRangePicker: FC<IDateRangePickerProps> = ({ ...rest }) => {
  return (
    <Fragment>
      <DatePicker.RangePicker {...rest} />
    </Fragment>
  )
}

DateRangePicker.defaultProps = {
  size: 'large'
}

export default DateRangePicker
