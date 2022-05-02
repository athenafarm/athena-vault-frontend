export const Vault: React.FC<VaultProps> = ({
  APY = '28,02%',
  balance = '1.502,31',
  deposit_fee = '0%',
  performance_fee = '15%-20%',
  risk = 'Low',
  uses = 'Anchor & Mirror',
  vault = 'Anchor-Mirror R1',
  withdrawal_fee = '0%',
}: VaultProps) => {
  return (
    <div className="mx-5 flex w-full flex-col rounded-lg bg-tertiary p-5">
      <h2 className="text-2xl font-extrabold">{vault}</h2>
      <div className="mt-2 flex flex-col text-gray-300">
        <p>Uses: {uses}</p>
        <p>Risk: {risk}</p>
      </div>
      <div className="mx-1 mt-4 flex justify-between text-xl">
        <p>APY</p>
        <p>{APY}</p>
      </div>
      <div className="mt-3 flex flex-col rounded-lg bg-slate-900 p-3">
        <p>Balance:</p>
        <div className="mt-1 flex items-center justify-center space-x-4">
          <p className="text-3xl tracking-widest">{balance}</p>
          <p className="text-xl text-gray-300">UST</p>
        </div>
      </div>
      <div className="mt-3 flex justify-between space-x-4 text-lg">
        <button className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-2 py-4">
          Deposit
        </button>
        <button className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-2 py-4">
          Withdraw
        </button>
      </div>
      <div className="mt-4 flex flex-col text-gray-300">
        <p>Deposit fee: {deposit_fee}</p>
        <p>Withdrawal fee: {withdrawal_fee}</p>
        <p>Performance fee: {performance_fee}</p>
      </div>
    </div>
  )
}

interface VaultProps {
  vault: string
  uses: string
  risk: string
  APY: string
  balance: string
  deposit_fee: string
  withdrawal_fee: string
  performance_fee: string
}
