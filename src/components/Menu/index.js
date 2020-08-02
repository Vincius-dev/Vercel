import React from 'react';
import Logo from '../../assets/Images/Logo.png';
import './Menu.css';
import Button from '../Button/index.js';
//import ButtonLink from '../components/buttonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="LeagueDoc logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;