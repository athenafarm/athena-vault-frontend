import Tab from '../Tab/Tab'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import {
  Navbar,
  TabContainer,
  WarnToast,
  ConnectButton,
} from './styled/components'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import { useWallet, WalletStatus } from '@terra-money/wallet-provider'
// import Modal from 'react-modal'

// Modal.setAppElement('#navbar')
import Modal from '@mui/material/Modal'

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface Props {
  selectedTab: 'Home' | 'Vaults' | 'Docs'
}

const Header: React.FC<Props> = ({ selectedTab }) => {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    install,
    disconnect,
  } = useWallet()
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log('Modal opened')
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar id="navbar">
        <Link href="/">
          <a>
            <Image height="50px" width="50px" src="/logo.svg" />
          </a>
        </Link>
        <TabContainer>
          <Tab content="Home" isSelected={selectedTab === 'Home'} />
          <Tab content="Vaults" isSelected={selectedTab === 'Vaults'} />
          <Tab content="Docs" isSelected={selectedTab === 'Docs'} />
        </TabContainer>
        <ConnectButton onClick={openModal} type="button">
          Connect
        </ConnectButton>
        <Modal
          open={modalIsOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <>
              {availableInstallTypes.map((connectType) => (
                <button
                  key={'install-' + connectType}
                  onClick={() => install(connectType)}
                >
                  Install {connectType}
                </button>
              ))}
              {availableConnectTypes.map((connectType) => (
                <button
                  key={'connect-' + connectType}
                  onClick={() => connect(connectType)}
                >
                  Connect {connectType}
                </button>
              ))}
              <br />
              {availableConnections.map(
                ({ type, name, icon, identifier = '' }) => (
                  <button
                    key={'connection-' + type + identifier}
                    onClick={() => connect(type, identifier)}
                  >
                    <img
                      src={icon}
                      alt={name}
                      style={{ width: '1em', height: '1em' }}
                    />
                    {name} [{identifier}]
                  </button>
                )
              )}
            </>
          )}
          {status === WalletStatus.WALLET_CONNECTED && (
            <button onClick={() => disconnect()}>Disconnect</button>
          )}
        </Modal>
      </Navbar>
      <WarnToast>this is a beta product, use at your own risk</WarnToast>
    </ThemeProvider>
  )
}

export default Header
