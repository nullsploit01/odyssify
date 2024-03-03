import debounce from 'lodash/debounce'
import { FC, Fragment, useCallback, useState } from 'react'

import SearchBar, { ISearchBarProps } from 'src/components/molecules/search-bar'
import { useItineraryStore } from 'src/stores/use-itinerary'

interface ILocationSearchBarProps extends ISearchBarProps {}

const LocationSearchBar: FC<ILocationSearchBarProps> = ({ ...rest }) => {
  const [_searchQuery, setSearchQuery] = useState('')

  const { isInvalid, updateLocation } = useItineraryStore()

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query)
    updateLocationDebounced(query)
  }

  const updateLocationDebounced = useCallback(debounce(updateLocation, 750), [])

  return (
    <Fragment>
      <SearchBar
        value={_searchQuery}
        onChange={(e) => handleSearchQueryChange(e.target.value)}
        status={isInvalid.location ? 'error' : undefined}
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
