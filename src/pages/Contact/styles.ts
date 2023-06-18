import { styled } from 'styled-components'

export const ContactContainer = styled.div`
  p {
    margin-top: 20px;
    color: ${(props) => props.theme.textColor};
    width: 300px;
    line-height: 25px;
    font-style: oblique;
  }
`
export const CardContact = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 24px;
  border-radius: 10px;
  margin: 40px auto;
  text-align: center;
  -webkit-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.11);
  color: ${(props) => props.theme.textColor};
  font-style: oblique;

  h3 {
    font-size: 24px;
  }
  > img {
    height: 300px;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 40px;
    gap: 40px;

    li > a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      color: ${(props) => props.theme.textColor};
      font-style: oblique;

      img {
        height: 80px;
      }
    }
  }
`
