import { AutoComplete, Input, InputProps } from 'antd'
import { DefaultOptionType } from 'antd/es/select'
import { FC, Fragment } from 'react'

export interface ISearchBarProps extends InputProps {
  options: DefaultOptionType[]
}

const SearchBar: FC<ISearchBarProps> = ({ options, ...rest }) => {
  return (
    <Fragment>
      <AutoComplete options={options} style={{ width: '100%' }}>
        <Input {...rest} />
      </AutoComplete>
    </Fragment>
  )
}

SearchBar.defaultProps = {
  size: 'large',
  allowClear: true,
  placeholder: 'Search'
}

export default SearchBar
