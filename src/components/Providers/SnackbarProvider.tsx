import { ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'
import { makeStyles } from '@material-ui/core/styles'

import Img from 'src/components/layout/Img'
import AlertIcon from 'src/assets/icons/alert.svg'
import CheckIcon from 'src/assets/icons/check.svg'
import ErrorIcon from 'src/assets/icons/error.svg'
import InfoIcon from 'src/assets/icons/info.svg'
import useNotifier from 'src/logic/hooks/useNotifier'
import { fontColor, secondaryText, sm } from 'src/theme/variables'

const useStyles = makeStyles({
  containerRoot: {
    top: '50px',
  },
  root: {
    width: '340px',
    border: '#06fc99 solid 2px',
    borderRadius: '5px',
    background: '#000000',
  },
  success: {
    background: '#000000',
  },
  error: {
    background: '#000000',
  },
  warning: {
    background: '#000000',
  },
  info: {
    background: '#000000',
  },
  snackbar: {
    borderRadius: `${sm}`,
    flexWrap: 'nowrap',
    padding: '20px',
    alignItems: 'space-between',
    '& div:first-child': {
      color: fontColor,
      padding: '0 10px 0 0',
      alignItems: 'stretch',
      overflowY: 'auto',
      maxHeight: '160px',
      '& > img': {
        marginRight: '13px',
      },
    },
    '& div:last-child': {
      paddingLeft: '0',
      '& > button': {
        color: secondaryText,
      },
    },
  },
})

// Hook must be inside the provider
const Notifier = (): null => {
  useNotifier()
  return null
}

const CustomSnackBarProvider = ({ children }: { children: ReactNode }): React.ReactElement => {
  const classes = useStyles()

  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={classes.snackbar}
      classes={{
        containerRoot: classes.containerRoot,
        root: classes.root,
        variantSuccess: classes.success,
        variantError: classes.error,
        variantWarning: classes.warning,
        variantInfo: classes.info,
      }}
      iconVariant={{
        error: <Img alt="Error" src={ErrorIcon} />,
        info: <Img alt="Info" src={InfoIcon} />,
        success: <Img alt="Success" src={CheckIcon} />,
        warning: <Img alt="Warning" src={AlertIcon} />,
      }}
      maxSnack={5}
    >
      {children}
      <Notifier />
    </SnackbarProvider>
  )
}

export default CustomSnackBarProvider
