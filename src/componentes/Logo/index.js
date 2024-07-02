import logo from '../../imagens/logo.svg'
import './estilo.css'

function Logo() {
    return (
        <div className='logo' alt='icon da logo'>
          <img src={logo}></img>
          <p>
            <strong>Alura</strong>Books
          </p>
        </div>
    );
}

export default Logo;