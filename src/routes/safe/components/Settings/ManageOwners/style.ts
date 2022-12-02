import { createStyles, makeStyles } from '@material-ui/core'

import { background, lg, sm } from 'src/theme/variables'

export const useStyles = makeStyles(
  createStyles({
    formContainer: {
      minHeight: '420px',
    },
    title: {
      padding: lg,
      paddingBottom: 0,
    },
    annotation: {
      paddingLeft: lg,
    },
    hide: {
      '&:hover': {
        backgroundColor: `${background}`,
      },
      '&:hover $actions': {
        visibility: 'visible',
      },
    },
    actions: {
      justifyContent: 'flex-end',
      visibility: 'visible',
      minWidth: '100px',
      gap: '16px',
    },
    noBorderBottom: {
      '& > td': {
        borderBottom: 'none',
      },
    },
    editOwnerIcon: {
      cursor: 'pointer',
    },
    replaceOwnerIcon: {
      marginLeft: lg,
      cursor: 'pointer',
    },
    controlsRow: {
      backgroundColor: '#000',
      padding: lg,
      borderRadius: sm,
    },
    removeOwnerIcon: {
      marginLeft: lg,
      cursor: 'pointer',
    },
  }),
)
