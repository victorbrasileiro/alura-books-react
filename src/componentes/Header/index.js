import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import Icones from '../IconesHeader'
import styled from 'styled-components'
import React from 'react'

const HeaderContainer = styled.header `
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
      <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <Icones/>
      </HeaderContainer>
           
    )
}

export default Header;