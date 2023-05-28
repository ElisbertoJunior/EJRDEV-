import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  color: ${(props) => props.theme.blueColor};
  padding: 15px 8px;
  img {
    width: 120px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const ItemLink = styled.a`
  color: ${(props) => props.theme.blueColor};
  font-style: italic;
  font-weight: bold;
`
