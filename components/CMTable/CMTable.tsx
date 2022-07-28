import { Table, TableProps } from '@mantine/core'
import useStyles from '@components/CMTable/CMTable.styles'

export interface CMTableProps extends TableProps {
  headers: JSX.Element[]
  data: JSX.Element[][]
  id: string
}

export const CMTable: React.FC<CMTableProps> = ({
  headers,
  id,
  data,
  ...rest
}) => {
  const { classes } = useStyles()

  const rows = data.map((element, index) => {
    return (
      <tr key={`cm-table-body-row-${id}-${index}`}>
        {element.map((dataPointJSX, datapointIdx) => (
          <td key={`cm-table-body-row-${id}-${index}-${datapointIdx}`}>
            {dataPointJSX}
          </td>
        ))}
      </tr>
    )
  })

  return (
    <Table fontSize="xs" className={classes.table} {...rest}>
      <thead className={classes.thead}>
        <tr>
          {headers.map((header, index) => (
            <th key={`cm-table-th-${id}-${index}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
