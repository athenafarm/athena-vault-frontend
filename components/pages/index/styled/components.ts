import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  @media (min-width: 640px) {
    width: 50%;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
`

export const PinkUpperDot = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: block;
    text-align: center;
    padding-bottom: 3rem;
  }
`
export const Primary = styled.div`
  font-family: Zen dots;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.primary};
  @media (min-width: 640px) {
    font-size: 3.75rem;
    line-height: 1;
  }
`

interface SecondaryText {
  readonly pt: string
}

export const Secondary = styled.div<SecondaryText>`
  font-family: Zen dots;
  padding-top: ${(props) => props.pt};
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme.colors.secondary};
  @media (min-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`

export const OpenApp = styled.button`
  font-family: Zen dots;
  font-size: 100%;
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  margin-top: 3rem;
  width: fit-content;
  border-color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  border-radius: 0.75rem;
  border-width: 1px;
`

export const DotsContainer = styled.div`
  display: none;
  @media (min-width: 640px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 3rem;
  }
`
export const GreyPiramidDot = styled.div`
  padding-top: 3rem;
  text-align: right;
`
export const PinkPiramidDot = styled.div`
  padding-lef: 3rem;
`

export const Piramid = styled.div`
  text-align: center;
`
