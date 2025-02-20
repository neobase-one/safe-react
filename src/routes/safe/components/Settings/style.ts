import { createStyles } from '@material-ui/core'

import { border, fontColor, screenSm, sm, xs } from 'src/theme/variables'

export const styles = createStyles({
  root: {
    backgroundColor: '#000',
    borderRadius: sm,
    marginTop: '2rem',
    border: "3px solid #06fc99",
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '54px',
    minHeight: '505px',

    [`@media (min-width: ${screenSm}px)`]: {
      flexDirection: 'row',
    },
  },
  contents: {
    width: '100%',
  },
  container: {
    flexGrow: 1,
    height: '100%',
    position: 'relative',
  },
  links: {
    textDecoration: 'underline',
    marginRight: '6px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  removeSafeBtn: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-1px', // to make it the same as row in Balances component
  },
  counter: {
    background: border,
    borderRadius: '3px',
    color: fontColor,
    lineHeight: 'normal',
    margin: `-2px 0 -2px ${sm}`,
    padding: xs,
    fontSize: '11px',
  },
})
