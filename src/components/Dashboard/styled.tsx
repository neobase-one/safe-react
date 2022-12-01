import { ReactElement } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Text } from '@gnosis.pm/safe-react-components'
import { xs, lg, black500, extraLargeFontSize, largeFontSize } from 'src/theme/variables'

export const WidgetContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const DashboardTitle = styled.p`
  color: ${black500};
  font-size: ${extraLargeFontSize};
  font-family: 'modeSeven', monospace !important;
  width: 100%;
  margin: 12px 12px -33px;
`

export const WidgetTitle = styled.p`
  color: ${black500};
  font-size: ${largeFontSize};
  margin-top: 0;
  font-family: 'modeSeven', monospace !important;
`

export const WidgetBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
`

export const Card = styled.div`
  background-color: #000;
  border: #06fc99 solid 2px;
  padding: ${lg};
  border-radius: 8px;
  flex-grow: 1;
  position: relative;
  box-sizing: border-box;
  height: 100%;

  & h2 {
    margin-top: 0;
  }
`

const StyledLink = styled(Link)`
  font-family: 'modeSeven', monospace !important;
  text-decoration: none;
  color: #05de87;
  display: flex;
  align-items: center;
  gap: ${xs};
  margin-bottom: 10px;
  padding-right: 26px;
`
const StyledText = styled(Text)`
  color: #06fc99;
  font-family: 'modeSeven', monospace !important;
`

export const ViewAllLink = ({ url, text }: { url: string; text?: string }): ReactElement => (
  <StyledLink to={url}>
    {text || <StyledText size="xl">View All</StyledText>}
    <ChevronRightIcon />
  </StyledLink>
)
