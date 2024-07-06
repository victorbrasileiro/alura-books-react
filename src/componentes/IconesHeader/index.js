import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-right: 40px;
  align-items: center;
`

const Icones = styled.ul`
  display: flex;
  padding-top: 17px;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone className='icone'>
              <img src={icone}></img>
            </Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader;