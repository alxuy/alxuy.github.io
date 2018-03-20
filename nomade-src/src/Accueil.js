import React from 'react';
import accueil from './accueil.jpg';

const Accueil = () => {
    return <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{
                width: '1024px',
                minWidth: '320px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                <div
                    style={{width: '512px', minWidth: '320px', padding: '10px', display: 'flex', alignItems: 'center'}}>
                    <img style={{width: '100%'}} src={accueil} alt="Accueil"/>
                </div>
                <div style={{width: '512px', minWidth: '320px', padding: '10px'}}>
                    <h3>Faites de votre entretien un atout supplémentaire de votre réussite.</h3>
                    <p>Ne considérez plus l’entretien de personnalité comme une épreuve, mais comme une force
                        supplémentaire,
                        un allié qui vous permettra de faire la différence.</p>

                    <p>L’entretien aux grandes écoles est sans doute l’épreuve la plus maitrisable, et pourtant souvent
                        la
                        moins préparée par les candidats.</p>

                    <p>A travers une préparation alliant théorie et pratique, exercices et simulation, vous
                        transformerez
                        votre entretien en atout supplémentaire de réussite.<br/>
                        Nous travaillons sur le fonds et la forme de votre prestation, et vous accompagnons vers votre
                        réussite.</p>

                    <p>Etre soi-même lors d’un entretien est essentiel, mais ne suffit pas. L’entretien de personnalité
                        et
                        de motivation demande un travail de préparation, au même titre que toute matière.</p>
                </div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '1024px', minWidth: '320px', padding: '10px'}}>
                <h3>Ne laissez pas de place au hasard. Mettez toutes les chances de votre côté.</h3>

                <b>Présentation du coach :</b>
                <p>Ancien élève de l’ESSEC, membre du jury des admissibilités à l’ESSEC depuis une quinzaine d’années,
                    je prépare et accompagne des élèves en classes préparatoires de différents lycées parisiens.
                    Formateur au sein de l’école WIN WIN Exam.</p>
                <p>La formation que vous recevrez est le fruit de 15 ans d’expérience au sein des jurys d’admissibilité
                    de l’ESSEC, et auprès de dizaines d’élèves de classes préparatoires aux concours d'entrée des écoles
                    commerciales.</p>
            </div>
        </div>
    </div>;
};

export default Accueil;