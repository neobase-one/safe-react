import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import styled from 'styled-components'
import * as React from 'react'
import { primary } from 'src/theme/variables'

interface CellWidth {
  maxWidth: string
}

const StyledTableCell = styled(TableCell)`
  &&.MuiTableCell-root {
    font-family: 'modeSeven', monospace !important;
  }
  font-family: 'modeSeven', monospace !important;
`
const StyledTableSortLabel = styled(TableSortLabel)`
  &&.MuiTableCell-root {
    font-family: 'modeSeven', monospace !important;
  }
  font-family: 'modeSeven', monospace !important;
`

export const cellWidth = (width?: string | number): CellWidth | undefined => {
  if (!width) {
    return undefined
  }

  return {
    maxWidth: `${width}px`,
  }
}

class GnoTableHead extends React.PureComponent<any> {
  changeSort =
    (property: string, orderAttr: string): (() => void) =>
    () => {
      const { onSort } = this.props

      onSort(property, orderAttr)
    }

  render(): React.ReactElement {
    const { columns, order, orderBy } = this.props

    console.log('col: ', columns)

    return (
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <StyledTableCell
              align={column.align}
              key={column.id}
              padding={column.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === column.id ? order : false}
            >
              {column.static ? (
                <div style={{ color: primary }}>{column.label}</div>
              ) : (
                <StyledTableSortLabel
                  active={orderBy === column.id}
                  direction={order}
                  onClick={this.changeSort(column.id, column.order)}
                  style={{ color: primary, fontFamily: `'modeSeven', monospace` }}
                >
                  {column.label}
                </StyledTableSortLabel>
              )}
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }
}

export default GnoTableHead
