import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import styled from 'styled-components'
import { ReactElement } from 'react'

const StyledTableCell = styled(TableCell)`
  &&.MuiTableCell-root {
    font-family: 'modeSeven', monospace !important;
  }
  font-family: 'modeSeven', monospace !important;
`

const buildWidthFrom = (size) => ({
  minWidth: `${size}px`,
  fontFamily: `'modeSeven', monospace`,
})

const overflowStyle: any = {
  overflowX: 'auto',
}

// see: https://css-tricks.com/responsive-data-tables/
const GnoTable = ({ children, size }): ReactElement => {
  const style = size ? buildWidthFrom(size) : { fontFamily: `'modeSeven', monospace` }

  return (
    <div style={overflowStyle}>
      <Table style={style}>{children}</Table>
    </div>
  )
}

export { TableBody, StyledTableCell as TableCell, TableHead, TableRow }
export default GnoTable
