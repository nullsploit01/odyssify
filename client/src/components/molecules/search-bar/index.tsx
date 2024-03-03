import { Input, InputProps } from 'antd'
import { FC, Fragment } from 'react'

export interface ISearchBarProps extends InputProps {}

const SearchBar: FC<ISearchBarProps> = ({ ...rest }) => {
  return (
    <Fragment>
      <Input {...rest} />
    </Fragment>
  )
}

SearchBar.defaultProps = {
  size: 'large',
  allowClear: true,
  placeholder: 'Search'
}

export default SearchBar
