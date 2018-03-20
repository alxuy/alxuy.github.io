import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Footer = () => {
    return <footer style={{backgroundColor: '#000066', display: 'flex', justifyContent: 'center', color: 'white'}}>
        <div style={{
            width: '1024px',
            minWidth: '320px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        }}>
            <div
                style={{width: '512px', minWidth: '320px', padding: '10px', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '320px'}}>
                    <h4 style={{textAlign: 'center'}}>Contact</h4>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div>
                            <span><Glyphicon glyph='earphone' style={{marginRight: '10px'}}/>06 XX XX XX XX</span><br/>
                            <span><Glyphicon glyph='envelope' style={{marginRight: '10px'}}/>prenom.nom@mail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{width: '512px', minWidth: '320px', padding: '10px', display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '320px'}}>
                    <h4 style={{textAlign: 'center'}}>Plan du site</h4>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div>
                            <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
                                Accueil
                            </Link><br/>
                            <Link to="/prestations" style={{color: 'white', textDecoration: 'none'}}>
                                Prestations
                            </Link><br/>
                            <Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>
                                Contact
                            </Link><br/>
                            <Link to="/actualites" style={{color: 'white', textDecoration: 'none'}}>
                                Actualités
                            </Link><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};

export default Footer;