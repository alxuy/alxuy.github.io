import React from 'react';
import {Link} from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';

const Onglet = ({nom, glyph, path}) => {
    return <div
        style={{width: '200px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Link to={path} style={{color: 'white', textDecoration: 'none', fontSize: '18px'}}>
            <Glyphicon glyph={glyph}
                       style={{marginRight: '10px'}}/>
            {nom}
        </Link>
    </div>;
};

export default Onglet;