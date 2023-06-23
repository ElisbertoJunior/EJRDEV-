import { styled } from 'styled-components'
import { breakpoints } from '../../style'

export const AboutContainer = styled.div`
  margin: 92px 0;
`
export const AboutContent = styled.div`
  display: flex;
  max-width: 900px;
  color: ${(props) => props.theme.textColor};

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      p {
        width: 90%;
        text-align: flex-start;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }

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
`
