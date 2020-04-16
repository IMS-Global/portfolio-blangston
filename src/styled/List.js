import styled from 'styled-components'

const List = {}

List.UnOrdered = styled.ul`
  padding-right: 1rem;

  li::before {
    color: #BA5A31;
  }
`
List.Item = styled.li`
  color: #222731;
  font-family: Roboto;
  font-size: 14px;
  letter-spacing: 0.19px;
  line-height: 21px;
  margin-bottom: 0.25rem;
`

export { List }
