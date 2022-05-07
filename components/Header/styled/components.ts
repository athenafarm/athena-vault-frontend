import styled from 'styled-components'

export const WarnToast = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${(props) => props.theme.colors.grey};
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-family: mono;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.banner};
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`
export const Navbar = styled.nav`
  font-family: Inconsolata;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-color: ${(props) => props.theme.colors.grey};
  background-color: transparent;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  @media (max-width: 768px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`

export const TabContainer = styled.div`
  padding-left: 6rem;
  padding-right: 6rem;
  font-size: 1.25rem;

  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 0.75rem;
  }
  color: ${(props) => props.theme.colors.white};
`

export const ConnectButton = styled.button`
  font-family: inherit;
  font-size: 0.75rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  width: fit-content;
  border-color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 0.75rem;
  border-width: 1px;
  margin-left: auto;
`
