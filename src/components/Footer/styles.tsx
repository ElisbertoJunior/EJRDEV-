import { styled } from 'styled-components'
import { breakpoints } from '../../style'

export const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundFooterColor};
  color: ${(props) => props.theme.textColor};
  font-style: oblique;
  margin-top: 100px;

  a {
    color: ${(props) => props.theme.textColor};
  }
`
export const FooterContent = styled.div`
  padding: 40px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  p {
    padding-bottom: 8px;
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`
export const LinkItems = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  img {
    height: 40px;
  }
`
