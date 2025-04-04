import './header.css';

export function Header() {
    return(
    <header className='App-Header'>
        <div className='App-Header-Name'>
            <h1>Генератор паролей</h1>
        </div>

        <div className='App-Header-Img'>
            <img src='/image/Logo.png' className='App-logo' alt='logo'/>
            <p>Gen Password</p>
        </div>
    </header>
    )
}