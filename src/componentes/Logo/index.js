import styled from 'styled-components';
import logo from '../../imagens/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    gap: 7px;
    margin-left: 30px;
`

const LogoImage = styled.img`
  margin-righ: 10px;
`

const LogoName = styled.p`
  
`

const Negrito = styled.strong`
  font-weight: bold;
`


function Logo() {
    return (
        <LogoContainer>
          <LogoImage 
            src={logo} 
            alt='Logo Livraria'>
          </LogoImage>
          <LogoName>
            <Negrito>Alura</Negrito>Books
          </LogoName>
        </LogoContainer>
    );
}

export default Logo;