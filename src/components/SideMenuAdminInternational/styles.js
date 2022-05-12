import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color:  #0568a6;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 19vw;
  min-height:100vh;  
  margin: 0 0 ;

  hr {
    margin: 50px 15px;
  }

  button {
    background-color: transparent;
    padding: 40px;
    margin-top:10px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 30vh;
    height:20vh;
  }

  img {
    max-width: 22vh;
  }
`
export const ItemContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background:${props => (props => props.isActive ? '#fff' : '' )} ;
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;
  
  .icon {
    color: #000;
  }

`

export const ListLink = styled(Link)`
  font-weight: 600;
  font-size: 17px;
  color: #000;
  text-decoration: none;
`
