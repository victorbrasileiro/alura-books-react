import './estilo.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import Icones from '../IconesHeader'

function Header() {
    return (
      <header className='App-header'>
        <Logo/>
        <OpcoesHeader/>
        <Icones/>
      </header>        
    )
}

export default Header;