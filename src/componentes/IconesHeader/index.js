import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
  margin-left: 10px;
  align-items: center;
`

const Icones = styled.ul`
  display: flex;
  padding-top: 17px;
`

const IconeImage = styled.img`
  
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
          { icones.map( (icone) => (
            <Icone>
              <IconeImage 
                src={icone}>
              </IconeImage>
            </Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader;

//O metodo MAP vai criar uma nova lista dos elementos listados