import { FC, PropsWithChildren } from 'react'

const withTemplate = (Component: FC, Template: FC<PropsWithChildren>) => {
  const UpdatedComponent = () => {
    return (
      <Template>
        <Component />
      </Template>
    )
  }

  return UpdatedComponent
}

export default withTemplate
