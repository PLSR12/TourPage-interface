import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  form {
    background-color: #565656;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`
export const Label = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  outline: none;
  border: none;
`

export const Button = styled.button`
  width: 100%;
  margin-top: 25px;
`
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  border: 1px #ffff dashed;
  border-radius: 5px;
  padding: 15px;
  gap: 5px;
  align-items: center;

  input {
    width: 1px;
    opacity: 0;
  }
`
