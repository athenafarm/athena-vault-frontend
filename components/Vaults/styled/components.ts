import styled from 'styled-components'
import { Card } from '../../Card/Card'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1024px) {
    overflow-x: auto;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const VaultCard = styled(Card)`
  margin-right: 3rem;
  padding: 1rem 2rem;
  width: 30%;
  @media (max-width: 768px) {
    width: fit-content;
    margin-right: 0rem;
    margin-bottom: 3rem;
    padding: 0.5rem 1rem;
  }
`
export const VaultInfo = styled.div``

export const APYInfo = styled.div`
  margin-top: 0.5rem;
`

export const FeeInfo = styled.div`
  margin-top: 0.5rem;
`

export const BalanceCard = styled(Card)`
    padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.background};
  display:flex
  flex-direction: column;
  @media (max-width: 768px) {
      padding: 0.25rem;
  }
`
export const Balance = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Amount = styled.div`
  font-size: 1.875rem;
  line-height: 2.25rem;
  letter-spacing: 0.1em;
 
  
`
export const UST = styled.div`
  font-size: 1.25rem;
  line-height: 1.75rem;
  @media (max-width: 768px) {
    font-size: 0.625rem;
    line-height: 1.25rem;
}
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  justify-content: space-between;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
`
export const Action = styled(BalanceCard)`
  width: 35%;
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  @media (max-width: 1024px) {
    padding: 1rem 0.5rem;
  }

`
