import { ReactElement } from 'react'
import styled from 'styled-components'

const UnStyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  outline-color: transparent;
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 2px solid #06fc99;
    height: 26px;
    width: 26px;
  }
`
type Props = {
  onClick?: () => void
  children: ReactElement
  dataTestId?: string
}

const ButtonHelper = ({ onClick = () => undefined, children, dataTestId }: Props): React.ReactElement => {
  return (
    <UnStyledButton onClick={onClick} type={'button'} data-testid={dataTestId}>
      {children}
    </UnStyledButton>
  )
}

export default ButtonHelper
