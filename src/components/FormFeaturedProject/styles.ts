import { styled } from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px 0;

  > div {
    display: flex;
    gap: 24px;
    margin-bottom: 40px;
  }

  form {
    width: 500px;
    margin-bottom: 40px;

    input,
    textarea {
      display: block;
      width: 100%;
      margin-bottom: 8px;
      height: 30px;
      padding: 8px;
      border-radius: 8px;
      border: none;

      font-style: oblique;
    }

    textarea {
      height: 80px;
      resize: none;
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
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }

    .input-file {
      color: #fff;
      background-color: ${(props) => props.theme.blueColor};
      padding: 5px;
    }
  }
`
