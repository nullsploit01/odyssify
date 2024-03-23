import { UserOutlined } from '@ant-design/icons'
import { debounce } from 'lodash'
import { FC, Fragment, useEffect, useState } from 'react'

import SearchBar, { ISearchBarProps } from 'src/components/molecules/search-bar'
import { geoService } from 'src/services/api/geo'
import { useItineraryStore } from 'src/stores/use-itinerary'
import { IAutoCompleteAPIResponse } from 'src/types/services'

interface ILocationSearchBarProps extends Omit<ISearchBarProps, 'options'> {}

const LocationSearchBar: FC<ILocationSearchBarProps> = ({ ...rest }) => {
  const [_locationAutocompleteResults, setLocationAutocompleteResults] = useState<
    IAutoCompleteAPIResponse[]
  >([])

  const { isInvalid, updateLocation, location } = useItineraryStore()

  useEffect(() => {
    if (location?.trim()) {
      debouncedGetLocationAutocompleteResults()
    }

    return () => {
      debouncedGetLocationAutocompleteResults.cancel()
    }
  }, [location])

  const getLocationAutocompleteResults = () => {
    geoService.autocomplete(location).then((response) => {
      if (response?.data) {
        setLocationAutocompleteResults(response?.data)
      }
    })
  }

  const debouncedGetLocationAutocompleteResults = debounce(getLocationAutocompleteResults, 500)

  const renderTitle = (title: string) => (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  )

  _locationAutocompleteResults.map(() => {})

  const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    )
  })

  const options = [
    {
      label: renderTitle('Libraries'),
      options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)]
    },
    {
      label: renderTitle('Solutions'),
      options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)]
    },
    {
      label: renderTitle('Articles'),
      options: [renderItem('AntDesign design language', 100000)]
    }
  ]

  return (
    <Fragment>
      <SearchBar
        value={location}
        onChange={(e) => updateLocation(e.target.value)}
        status={isInvalid.location ? 'error' : undefined}
        options={options}
        {...rest}
      />
    </Fragment>
  )
}

LocationSearchBar.defaultProps = {
  prefix: <b style={{ margin: '10px 5px' }}>Where To?</b>,
  placeholder: 'eg Bali, Paris'
}

export default LocationSearchBar
