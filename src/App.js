import React from "react"
import Menu from "./components/menu"
import Main from "./components/main"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Hubballi', cursive;
  }
  ::-webkit-scrollbar{
    width:11px;
  }
  ::-webkit-scrollbar-track{
    background:#2F131E;
  }
  ::-webkit-scrollbar-thumb{
    width:7px;
    background: #fff;
    border-radius: 30px;
  }
`


const App = () => {

  return(
    <div>
      <GlobalStyle/>
      <Menu item="Inicio"
      item2="Playlists"
      item3="Álbuns"
      item4="Singles"/>
      <Main/>
    </div>
  )
}

export default App