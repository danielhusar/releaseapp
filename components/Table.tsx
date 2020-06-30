import React from 'react'
import styled, { css } from './Styled'

interface Props {
  head?: string[]
  slim?: boolean
  children: React.ReactNode
}

const TableStyled = styled.table<{ slim: boolean }>`
  border: none;
  text-align: left;
  font-size: 0.875rem;

  th {
    padding: 20px 5px;
    font-weight: 500;
  }

  td {
    border-top: 1px solid #ccc;
    padding: 30px 5px;
  }

  ${({ slim }) =>
    slim &&
    css`
      td {
        padding: 15px 5px;
      }
    `}
`

const Table = ({ children, head, slim = false }: Props) => {
  return (
    <TableStyled slim={slim}>
      {head && (
        <thead>
          <tr>
            {head.map((title, i) => (
              <th key={i}>{title}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>{children}</tbody>
    </TableStyled>
  )
}

export default Table
