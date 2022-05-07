import { Content, Row, Title } from './styled/components'

export interface Deposit {
  vault: string
  balance: string
  earned: string
  APY: string
  APD: string
}

export const Deposits: React.FC<CardProps> = ({ deposits }) => {
  return (
    <Content>
      <Row isHeader={true}>
        <Title w="30%">Vault</Title>
        <Title w="20%">Balance</Title>
        <Title w="20%">Earned</Title>
        <Title w="10%">APY</Title>
        <Title w="10%">APD</Title>
      </Row>
      {deposits.map((deposit, index) => (
        <Row key={index} isHeader={false}>
          <Title w="30%">{deposit.vault}</Title>
          <Title w="20%">{deposit.balance}</Title>
          <Title w="20%">{deposit.earned}</Title>
          <Title w="10%">{deposit.APY}</Title>
          <Title w="10%">{deposit.APD}</Title>
        </Row>
      ))}
    </Content>
  )
}

interface CardProps {
  deposits: Deposit[]
}
