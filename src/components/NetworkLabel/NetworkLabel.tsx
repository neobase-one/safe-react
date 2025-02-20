import { ReactElement } from 'react'
import styled from 'styled-components'
import { ChainInfo } from '@gnosis.pm/safe-react-gateway-sdk'

import { getChainInfo } from 'src/config'
import { extraSmallFontSize, sm, xs } from 'src/theme/variables'

type Props = {
  networkInfo?: ChainInfo
  onClick?: () => void
  flexGrow?: boolean
  ['data-testid']?: string
}

function NetworkLabel(props: Props): ReactElement {
  const { networkInfo, onClick, flexGrow } = props
  const selectedNetwork = networkInfo || getChainInfo()

  return (
    <StyledLabel onClick={onClick} flexGrow={flexGrow} {...selectedNetwork.theme} data-testid={props['data-testid']}>
      {selectedNetwork.chainName}
    </StyledLabel>
  )
}

export default NetworkLabel

type StyledLabelTypes = {
  backgroundColor: string
  textColor: string
  onClick?: () => void
  flexGrow?: boolean
}

const StyledLabel = styled.span<StyledLabelTypes>`
  position: relative;
  bottom: 2px;
  line-height: normal;
  display: inline-block;
  min-width: 70px;
  font-size: ${extraSmallFontSize};
  padding: ${xs} ${sm};
  border: #06fc99 2px solid;
  color: #06fc99;
  text-align: center;
  border-radius: 4px;
  text-transform: capitalize;
  flex-grow: ${({ flexGrow }) => (flexGrow ? 1 : 'initial')};
`
