import globeIcon from './images/globe.png';

function Header() {
    return ( 
        <header className="navbar">
            <img src={globeIcon} alt="globe icon" className="navbar-icon" />
            <h1 className="navbar-title">my travel journal.</h1>
        </header>
     );
}

export default Header;