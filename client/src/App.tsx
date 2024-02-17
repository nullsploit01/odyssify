import { Button, Input, Space } from 'antd'

const App = () => {
  return (
    <Space style={{ height: '100%', width: '100%' }}>
      <Input placeholder="Please Input" />
      <Button type="primary">Submit</Button>
    </Space>
  )
}

export default App
