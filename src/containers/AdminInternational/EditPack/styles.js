import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  form {
    background-color: #0568a6;
    border-radius: 10px;
    padding: 30px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  textarea {
    min-width: 280px;
    min-height: 40px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
  }
`
export const Label = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 280px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  width: 80%;
  height: 40px;
  margin-top: 25px;
  background: #ffff;
  border-radius: 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  color: #000;
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
