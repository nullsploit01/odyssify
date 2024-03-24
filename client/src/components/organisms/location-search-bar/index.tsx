import { Spin, Typography } from 'antd'
import { debounce } from 'lodash'
import { FC, Fragment, useEffect, useState } from 'react'

import SearchBar, { ISearchBarProps } from 'src/components/molecules/search-bar'
import { geoService } from 'src/services/api/geo'
import { useItineraryStore } from 'src/stores/use-itinerary'
import { IAutoCompleteAPIResponse } from 'src/types/services'

interface ILocationSearchBarProps extends Omit<ISearchBarProps, 'options'> {}

const LocationSearchBar: FC<ILocationSearchBarProps> = ({ ...rest }) => {
  const [_loading, setLoading] = useState(false)
  const [_locationAutocompleteResults, setLocationAutocompleteResults] = useState<
    IAutoCompleteAPIResponse[]
  >([])

  const { isInvalid, updateLocation, location } = useItineraryStore()

  useEffect(() => {
    if (location?.trim()) {
      debouncedGetLocationAutocompleteResults()
    } else {
      setLocationAutocompleteResults([])
    }

    return () => {
      debouncedGetLocationAutocompleteResults.cancel()
    }
  }, [location])

  const getLocationAutocompleteResults = () => {
    setLoading(true)
    geoService
      .autocomplete(location)
      .then((response) => {
        if (response?.data) {
          setLocationAutocompleteResults(response?.data)
        }
      })
      .finally(() => setLoading(false))
  }

  const debouncedGetLocationAutocompleteResults = debounce(getLocationAutocompleteResults, 500)

  const renderAutocompleteOption = (autocompleteOption: IAutoCompleteAPIResponse) => ({
    value: autocompleteOption.name,
    label: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography.Text strong>{autocompleteOption.name}</Typography.Text>
        <Typography.Text type="secondary">{autocompleteOption.secondaryName}</Typography.Text>
      </div>
    ),
    id: autocompleteOption.id
  })

  const options = _locationAutocompleteResults.map((_location) => {
    return renderAutocompleteOption(_location)
  })

  return (
    <Fragment>
      <SearchBar
        value={location}
        status={isInvalid.location ? 'error' : undefined}
        options={options}
        onSelect={(e) => updateLocation(e.currentTarget.value)}
        suffix={_loading ? <Spin /> : null}
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
