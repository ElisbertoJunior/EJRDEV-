import { styled } from 'styled-components'
import { breakpoints } from '../../style'

export const AboutContainer = styled.div`
  margin: 92px 0;
`
export const AboutContent = styled.div`
  display: flex;
  max-width: 900px;
  color: ${(props) => props.theme.textColor};

  align-items: center;
  width: 100%;
  gap: 48px;
  margin: 80px auto;

  img {
    height: 350px;
  }

  p {
    width: 432px;
    font-style: oblique;
    margin-bottom: 16px;
  }

  ul {
    display: flex;

    img {
      height: 40px;
      width: 40px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    p {
      width: 95%;
      margin-left: 8px;
    }
  }
`
