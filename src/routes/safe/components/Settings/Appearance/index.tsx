import FormGroup from '@material-ui/core/FormGroup/FormGroup'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import { ChangeEvent, ReactElement } from 'react'

import Block from 'src/components/layout/Block'
import styled from 'styled-components'
import { lg } from 'src/theme/variables'
import Heading from 'src/components/layout/Heading'
import Paragraph from 'src/components/layout/Paragraph'
import { copyShortNameSelector, showShortNameSelector } from 'src/logic/appearance/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { setShowShortName } from 'src/logic/appearance/actions/setShowShortName'
import { setCopyShortName } from 'src/logic/appearance/actions/setCopyShortName'
import PrefixedEthHashInfo from 'src/components/PrefixedEthHashInfo'
import useDarkMode from 'src/logic/hooks/useDarkMode'
import { trackEvent } from 'src/utils/googleTagManager'
import { SETTINGS_EVENTS } from 'src/utils/events/settings'
import useSafeAddress from 'src/logic/currentSession/hooks/useSafeAddress'

// Other settings sections use MUI createStyles .container
// will adjust that during dark mode implementation
const Container = styled(Block)`
  padding: ${lg};
`

const StyledPrefixedEthHashInfo = styled(PrefixedEthHashInfo)`
  margin-bottom: 1em;
`

const Appearance = (): ReactElement => {
  const dispatch = useDispatch()
  const copyShortName = useSelector(copyShortNameSelector)
  const showShortName = useSelector(showShortNameSelector)
  const { safeAddress } = useSafeAddress()
  const [darkMode, setDarkMode] = useDarkMode()

  const handleShowChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(setShowShortName({ showShortName: checked }))

    trackEvent({
      ...SETTINGS_EVENTS.APPEARANCE.PREPEND_PREFIXES,
      label: checked,
    })
  }
  const handleCopyChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(setCopyShortName({ copyShortName: checked }))

    trackEvent({
      ...SETTINGS_EVENTS.APPEARANCE.COPY_PREFIXES,
      label: checked,
    })
  }

  const handleInvertChange = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setDarkMode(!darkMode)

    trackEvent({
      ...SETTINGS_EVENTS.APPEARANCE.INVERT_COLORS,
      label: checked,
    })
  }

  return (
    <>
      <Container>
        <Heading tag="h2">Use Chain-Specific Addresses</Heading>
        <Paragraph>You can choose whether to prepend EIP-3770 short chain names across Safes.</Paragraph>
        <StyledPrefixedEthHashInfo textColor='primary' hash={safeAddress} />
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={showShortName} onChange={handleShowChange} name="showShortName" />}
            label="Prepend addresses with chain prefix."
          />
          <FormControlLabel
            control={<Checkbox checked={copyShortName} onChange={handleCopyChange} name="copyShortName" />}
            label="Copy addresses with chain prefix."
          />
        </FormGroup>
      </Container>

      <Container>
        <Heading tag="h2">Theme (experimental)</Heading>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={darkMode} onChange={handleInvertChange} name="showShortName" />}
            label="Inverted colors"
          />
        </FormGroup>
      </Container>
    </>
  )
}

export default Appearance
