import React from 'react';
import {Button, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            mail: '',
            sujet: '',
            texte: '',
            message: ''
        };
    }

    handleChange = (e, field) => {
        this.setState({[field]: e.target.value});
    };

    onClick = () => {
        let message = 'Votre message a bien été envoyé';
        for (let key in this.state) {
            if (this.state[key] === '') {
                message = 'Veuillez remplir tous les champs';
            }
        }
        this.setState({message});
    };

    render() {
        let color = 'red';
        if (this.state.message === 'Votre message a bien été envoyé') {
            color = 'green';
        }
        return <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{width: '1024px', minWidth: '320px', padding: '10px'}}>
                    <h1 style={{textAlign: 'center'}}>Contact</h1>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div style={{marginTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div style={{width: '320px'}}>
                                    <form style={{marginBottom: '20px'}}>
                                        <FormGroup>
                                            <ControlLabel>Nom</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.nom}
                                                placeholder="Veuillez saisir votre nom"
                                                onChange={(e) => this.handleChange(e, 'nom')}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Prénom</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.prenom}
                                                placeholder="Veuillez saisir votre prénom"
                                                onChange={(e) => this.handleChange(e, 'prenom')}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Adresse e-mail</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.mail}
                                                placeholder="Veuillez saisir votre adresse e-mail"
                                                onChange={(e) => this.handleChange(e, 'mail')}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Sujet de votre demande</ControlLabel>
                                            <FormControl
                                                type="text"
                                                value={this.state.sujet}
                                                placeholder="Veuillez saisir le sujet de votre demande"
                                                onChange={(e) => this.handleChange(e, 'sujet')}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <ControlLabel>Votre message</ControlLabel>
                                            <FormControl
                                                componentClass="textarea"
                                                value={this.state.texte}
                                                placeholder="Veuillez saisir votre message"
                                                onChange={(e) => this.handleChange(e, 'texte')}
                                            />
                                        </FormGroup>
                                        <Button onClick={() => this.onClick()}>Me contacter</Button>
                                    </form>
                                    <span style={{color}}>{this.state.message}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Contact;