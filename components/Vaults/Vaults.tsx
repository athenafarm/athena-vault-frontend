import {
  APYInfo,
  Container,
  VaultCard,
  VaultInfo,
  FeeInfo,
  BalanceCard,
  Amount,
  Balance,
  UST,
  Action,
  Actions,
} from './styled/components'

export interface Vault {
  APY: string
  balance: string
  deposit_fee: string
  performance_fee: string
  risk: string
  uses: string
  vault: string
  withdrawal_fee: string
}

export const Vaults: React.FC<VaultProps> = ({ vaults }) => {
  return (
    <Container>
      {vaults.map((vault, index) => (
        <VaultCard key={index}>
          <VaultInfo>
            <p>Uses: {vault.uses}</p>
            <p>Risk: {vault.risk}</p>
            <h2>APY {vault.APY}</h2>
          </VaultInfo>
          <APYInfo>
            <BalanceCard>
              <div>Balance:</div>
              <Balance>
                <Amount>{vault.balance}</Amount>
                <UST>UST</UST>
              </Balance>
            </BalanceCard>
            <Actions>
              <Action onClick={() => console.log('Action Clicked')}>
                Deposit
              </Action>
              <Action onClick={() => console.log('Action Clicked')}>
                Withdraw
              </Action>
            </Actions>
          </APYInfo>
          <FeeInfo>
            <p>Deposit fee: {vault.deposit_fee}</p>
            <p>Withdraw fee: {vault.withdrawal_fee}</p>
            <p>Performance fee: {vault.performance_fee}</p>
          </FeeInfo>
        </VaultCard>
      ))}
    </Container>
  )
}

interface VaultProps {
  vaults: Vault[]
}
