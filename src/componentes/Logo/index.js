import styled from 'styled-components';
import logo from '../../imagens/logo.svg'

const LogoImage = styled.div`
    display: flex;
    font-size: 30px;
    gap: 7px;
    margin-left: 30px;
`


function Logo() {
    return (
        <LogoImage>
          <img src={logo}></img>
          <p>
            <strong>Alura</strong>Books
          </p>
        </LogoImage>
    );
}

export default Logo;