import type { NextPage } from 'next'
import React from 'react'
import AthenaHead from '../components/AthenaHead'
import Header from '../components/Header/Header'

// TODO: Get deposits from API
const deposits = [
  {
    vault: 'Anchor-Mirror R1',
    balance: '1.500,32',
    earned: '500,12',
    APY: '22%',
    APD: '1%',
  },
  {
    vault: 'Anchor-Mirror R2',
    balance: '300,12',
    earned: '10,12',
    APY: '18%',
    APD: '1,5%',
  },
]

const Home: NextPage = () => {
  return (
    <div className="root font-inconsolata">
      <AthenaHead />
      <Header selectedTab={'Home'} />
      <div className="flex flex-col">
        <h1 className="ml-12 mt-2 text-5xl text-white">My Deposits</h1>
        <div className="mx-12 my-8 rounded-lg bg-tertiary px-12 text-white">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b-2 border-gray-500">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium "
                        >
                          Vault
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium "
                        >
                          Balance
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium "
                        >
                          Earned
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium "
                        >
                          APY
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium "
                        >
                          APD
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {deposits.map((deposit) => (
                        <tr key={deposit.vault}>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                            {deposit.vault}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                            {deposit.balance}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                            {deposit.earned}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                            {deposit.APY}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                            {deposit.APD}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
