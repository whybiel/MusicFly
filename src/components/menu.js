import React from "react"
import styled from "styled-components"


const List = styled.ul`
    width:100%;
    height:9vh;
    background-color:#2E2E3A;
    color:#2E2E3A;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    list-style:none;

    li{
        font-size:2rem;
        color:#fff;
        cursor:pointer;
        &:hover{
            color:aquamarine;
            margin-bottom: 0.7vh;
        }
    }
`

const Menu = ({item, item2, item3, item4, children}) =>{

    return(
        <div>
            <List>
                <li>{item}</li>
                <li>{item2}</li>
                <li>{item3}</li>
                <li>{item4}</li>
                {children}
            </List>
        </div>
    )
}

export default Menu