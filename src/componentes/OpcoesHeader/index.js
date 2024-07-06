import styled from 'styled-components'

const textoOpcoes = ['CATEGORIA', 'FAVORITOS', 'MINHA ESTANTE']

const Opcao = styled.li`
    display: flex;
    min-width: 110px;
    justify-content: center;
    text-align: center;
    justify-content: center;
    height: 100%;
    padding-top: 11px;
    padding-right: 5px;
    cursor: pointer;
    font-size: 16px;
`

const Opcoes = styled.ul`
  display: flex;
`

function OpcoesHeader() {
    return (
        <Opcoes>
          { textoOpcoes.map( (texto) => ( 
            <Opcao>
              <p>
                {texto}
              </p>
            </Opcao>
          ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader