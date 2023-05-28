import { styled } from 'styled-components'

export const HeroContainer = styled.section`
  padding: 80px 8px;
  color: ${(props) => props.theme.textColor};

  .container {
    display: flex;
  }
`
export const HeroContent = styled.div`
  p {
    padding: 20px 0;
    width: 80%;
    font-weight: 100;
    font-style: oblique;
  }

  ul {
    display: flex;

    img {
      height: 40px;
    }
  }
`
