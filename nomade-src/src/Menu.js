import React from 'react';
import Onglet from './Onglet';

const Menu = () => {
    return <div style={{backgroundColor: '#000066', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Onglet nom="Accueil" glyph='home' path='/'/>
        <Onglet nom="Prestations" glyph='list-alt' path="/prestations"/>
        <Onglet nom="Contact" glyph='envelope' path="/contact"/>
        <Onglet nom="Actualités" glyph='globe' path="/actualites"/>
    </div>;
};

export default Menu;