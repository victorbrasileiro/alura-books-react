import React from "react"
import Input from   '../Input'
import styled from "styled-components"
import { useState } from "react"
import { livros } from './dadosPesquisa'


const ContainerPesquisa = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const ContainerLivrosPesquisados = styled.div `
        display: grid;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
`

const ResultadoTituloLivro = styled.p `
        display: flex;
`

const ImagemLivro = styled.img `
        display: flex;
        
`

function Pesquisa() {
    //o primeiro estado
    //o estado é um valor
    //cria a string padrão e o set é a atualização da string para que seja uma variavel mutável
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <ContainerPesquisa>
            <Titulo>Já sabe por onde começar? </Titulo>
            <Subtitulo>Encontre seu livro em nossa estante. </Subtitulo>
            <Input 
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {/* <p>{textoDigitado}</p>  */}

            { livrosPesquisados.map( livro => (
                <ContainerLivrosPesquisados>
                    <ResultadoTituloLivro>{ livro.nome }</ResultadoTituloLivro>
                    <ImagemLivro src={ livro.src } />
                </ContainerLivrosPesquisados>                
            )) }
        </ContainerPesquisa>
    )
}

export default Pesquisa