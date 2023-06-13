import { styled } from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65vh;

  form {
    width: 500px;

    input {
      display: block;
      width: 100%;
      margin-bottom: 8px;
      height: 30px;
      padding: 8px;
      border-radius: 8px;
      border: none;

      font-style: oblique;
    }

    button {
      display: block;
      width: 100%;
      padding: 10px 0;
      background-color: ${(props) => props.theme.blueColor};
      color: #fff;
      font-style: oblique;
      font-weight: bold;
      font-size: 16px;
      border: none;
      border-radius: 8px;
    }
  }
`
