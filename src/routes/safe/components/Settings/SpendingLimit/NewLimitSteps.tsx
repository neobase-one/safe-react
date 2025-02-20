import { Text } from '@gnosis.pm/safe-react-components'
import { ReactElement } from 'react'
import styled from 'styled-components'

import Img from 'src/components/layout/Img'
import AssetAmount from './assets/asset-amount.svg'
import Beneficiary from './assets/beneficiary.svg'
import Time from './assets/time.svg'

const StepWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  max-width: 720px;
  text-align: center;
`

const Step = styled.div`
  width: 24%;
  min-width: 120px;
  max-width: 164px;
`

const StepsLine = styled.div`
  height: 2px;
  flex: 1;
  background: #06fc99;
  margin: 46px 0;
`

const StyledText = styled(Text)`
  color: #06fc99;
`

export const NewLimitSteps = (): ReactElement => (
  <StepWrapper>
    <Step>
      <Img alt="Select Beneficiary" title="Beneficiary" height={96} src={Beneficiary} />

      <StyledText size="lg" color="primary" strong center>
        Select Beneficiary
      </StyledText>

      <StyledText size="lg" color="primary" center>
        Define beneficiary that will be able to use the allowance.
      </StyledText>

      <StyledText size="lg" color="primary" center>
        The beneficiary does not have to be an owner of this Safe
      </StyledText>
    </Step>

    <StepsLine />

    <Step>
      <Img alt="Select asset and amount" title="Asset and Amount" height={96} src={AssetAmount} />

      <StyledText size="lg" color="primary" strong center>
        Select asset and amount
      </StyledText>

      <StyledText size="lg" color="primary" center>
        You can set a spending limit for any asset stored in your Safe
      </StyledText>
    </Step>

    <StepsLine />

    <Step>
      <Img alt="Select time" title="Time" height={96} src={Time} />

      <StyledText size="lg" color="primary" strong center>
        Select time
      </StyledText>

      <StyledText size="lg" color="primary" center>
        You can choose to set a one-time spending limit or to have it automatically refill after a defined time-period
      </StyledText>
    </Step>
  </StepWrapper>
)
