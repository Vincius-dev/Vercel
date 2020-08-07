import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Images/Logo.png';
import './Menu.css';
import Button from '../Button/index.js';
//import ButtonLink from '../components/buttonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link href="/">
            <img className="Logo" src={Logo} alt="LeagueDoc logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;