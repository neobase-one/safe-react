import { makeStyles } from '@material-ui/core/styles'
import * as React from 'react'
import { secondary } from 'src/theme/variables'

const useStyles = makeStyles({
  footer: {
    boxSizing: 'border-box',
    background: '#000',
    display: 'flex',
    flexDirection: 'row',
    flexShrink: '1',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '100%',
    paddingBottom: '1rem',
    width: '100%',
    height: '59px',
  },
  item: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '13px',
  },
  link: {
    color: secondary,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  sep: {
    color: 'rgba(0, 0, 0, 0.54)',
    margin: '0 10px',
  },
  buttonLink: {
    padding: '0',
  },
} as any)

const Footer = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <p>Powered by NeoBase, Based on Gnosis Safe</p>
    </footer>
  )
}

export default Footer
