import { FC } from 'react'

import DateRangePicker, { IDateRangePickerProps } from 'src/components/molecules/date-range-picker'
import { useItineraryStore } from 'src/stores/use-itinerary'

interface IItineraryDateRangePickerProps extends IDateRangePickerProps {}

const ItineraryDateRangePicker: FC<IItineraryDateRangePickerProps> = ({ ...rest }) => {
  const { isInvalid, dateRange, updateDateRange } = useItineraryStore()

  return (
    <DateRangePicker
      onChange={updateDateRange}
      status={isInvalid.dateRange ? 'error' : undefined}
      value={[dateRange.from, dateRange.to]}
      {...rest}
    />
  )
}

ItineraryDateRangePicker.defaultProps = {
  size: 'large'
}

export default ItineraryDateRangePicker
