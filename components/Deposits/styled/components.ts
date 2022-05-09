import styled from 'styled-components'

export const Content = styled.div`
  overflow-x: auto;
`
interface RowProps {
  readonly isHeader: boolean
}
interface TitleProps {
  readonly w: string
}
export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  border-bottom: ${(props) =>
    props.isHeader ? `1px solid ${props.theme.colors.grey}` : 'transparent'};
`
export const Title = styled.div<TitleProps>`
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: ${(props) => props.w};
  padding: 1rem;
`
