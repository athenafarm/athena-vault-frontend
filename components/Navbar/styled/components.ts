import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`
export const LinkContainer = styled.div`
  width: 100%;
  @media (min-width: 640px) {
    width: auto;
    display: block;
  }
`
export const Ul = styled.ul`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0rem;
  @media (min-width: 640px) {
    margin-top: 0rem;
    display: flex;
    flex-direction: row;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`
export const Li = styled.li`
  @media (min-width: 640px) {
    margin-left: 2rem;
`
