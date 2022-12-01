import { ReactElement } from 'react'
import Button from 'src/components/layout/Button'
import Divider from '@material-ui/core/Divider'
import styled from 'styled-components'

import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import Link from 'src/components/layout/Link'
import { LOAD_SAFE_ROUTE, OPEN_SAFE_ROUTE } from 'src/routes/routes'
import Track from 'src/components/Track'
import { CREATE_SAFE_EVENTS, LOAD_SAFE_EVENTS } from 'src/utils/events/createLoadSafe'

function Welcome(): ReactElement {
  return (
    <Page align="center">
      <Block>
        <Title>Welcome to Canto Safe</Title>
        <CardsContainer>
          <StyledCard>
            {/* Create Safe */}
            <CardContentContainer>
              <SubTitle>Create Safe</SubTitle>
              <CardDescriptionContainer>
                <Text>Create a new Safe that is controlled by one or multiple owners.</Text>
                <Text>You will be required to pay a network fee for creating your new Safe.</Text>
              </CardDescriptionContainer>
              <Track {...CREATE_SAFE_EVENTS.CREATE_BUTTON}>
                <StyledButtonLabel>
                  <Button
                    minHeight="50"
                    minWidth="250"
                    color="primary"
                    size="lg"
                    variant="contained"
                    component={Link}
                    to={OPEN_SAFE_ROUTE}
                  >
                    + Create new Safe
                  </Button>
                </StyledButtonLabel>
              </Track>
            </CardContentContainer>
            <Divider orientation="vertical" flexItem />
            <CardContentContainer>
              {/* Load Safe */}
              <SubTitle>Load Existing Safe</SubTitle>
              <CardDescriptionContainer>
                <Text>
                  Already have a Safe or want to access it from a different device? Easily load your Safe using your
                  Safe address.
                </Text>
              </CardDescriptionContainer>
              <Track {...LOAD_SAFE_EVENTS.LOAD_BUTTON}>
                <Button
                  minHeight="50"
                  minWidth="250"
                  color="secondary"
                  variant="contained"
                  size="lg"
                  component={Link}
                  to={LOAD_SAFE_ROUTE}
                >
                  Add existing Safe
                </Button>
              </Track>
            </CardContentContainer>
          </StyledCard>
        </CardsContainer>
      </Block>
    </Page>
  )
}

export default Welcome

const Title = styled.div`
  color: #06fc99;
  font-size: 3rem;
`

const SubTitle = styled.div`
  color: #06fc99;
  font-size: 2rem;
`

const Text = styled.p`
  color: #06fc99;
  font-family: 'modeSeven', monospace !important;
`
const CardsContainer = styled.div`
  display: flex;
  height: 300px;
  max-width: 850px;
  margin-top: 2rem;
  padding: 1rem 0;
  border: 2px solid #06fc99;
  border-radius: 1rem;
`

const StyledCard = styled.div`
  display: flex;
  flex: 0 1 100%;
  padding: 0;
  background-color: transparent;
`

const CardContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
`
const StyledButtonLabel = styled.div`
  background-color: black;
  min-width: 130px;
  color: #06fc99;
  font-family: 'modeSeven', monospace !important;
  border: 0.5px solid #06fc99;
  border-radius: 1rem;
  :hover {
    background-color: #00341f;
    color: #06fc99;
    border: 0.5px solid #06fc99;
    border-radius: 1rem;
  }
`
const CardDescriptionContainer = styled.div`
  margin-top: 16px;
  margin-bottom: auto;
`
