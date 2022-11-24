import { withStyles } from '@material-ui/core/styles'
import { ReactElement } from 'react'
import styled from 'styled-components'

const styles = () => ({
  network: {
    fontFamily: 'IBM Plex Mono, monospace',
  },
  account: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginTop: '0.5rem',
  },
  connect: {
    letterSpacing: '-0.5px',
    whiteSpace: 'nowrap',
  },
})

const ConnectWalletText = styled.h2`
  font-size: 0.7rem;
  :hover {
    color: #06fc99;
  }
`
const ConnectWalletButton = styled.div`
  margin-top: -0.5rem;
  color: #000;
  background-color: #06fc99;
  cursor: pointer;
  padding: 0rem 1rem;
  border: 0.5px solid #06fc99;
  border-radius: 0.3rem;
  :hover {
    background-color: #00341f;
    color: #06fc99;
    border: 0.5px solid #06fc99;
  }
`

const ProviderDisconnected = ({ classes }): ReactElement => (
  <div className={classes.account}>
    <ConnectWalletButton>
      <ConnectWalletText>Connect Wallet</ConnectWalletText>
    </ConnectWalletButton>
  </div>
)

export default withStyles(styles as any)(ProviderDisconnected)
