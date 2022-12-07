import { background, sm } from 'src/theme/variables'
import { createStyles } from '@material-ui/core'

export const styles = createStyles({
  iconSmall: {
    fontSize: 16,
  },
  tooltipInfo: {
    position: 'relative',
    top: '3px',
    left: '3px',
  },
  hide: {
    '&:hover': {
      backgroundColor: `${background}`,
    },
    '&:hover $actions': {
      visibility: 'visible',
    },
    '&:focus $actions': {
      visibility: 'visible',
    },
  },
  actions: {
    justifyContent: 'flex-end',
    visibility: 'visible',
  },
  leftIcon: {
    marginRight: sm,
  },
  currencyValueRow: {
    textAlign: 'right',
  },
})
