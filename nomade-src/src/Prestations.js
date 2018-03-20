import React from 'react';

const Prestations = () => {
    return <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '1024px', minWidth: '320px', padding: '10px'}}>
                <h1 style={{textAlign: 'center'}}>Prestations</h1>
                <div style={{marginBottom: '40px'}}>
                    <h3 style={{textDecoration: 'underline'}}>Simulation d'une heure</h3>

                    <p>L’entretien d’embauche demeure la pierre angulaire du processus de recrutement. Premier véritable
                        contact avec l’entreprise, il permet au recruteur de jauger le potentiel et le professionnalisme
                        de
                        chaque candidat. C’est pourquoi il me semble utile d’en percer les secrets à l’aide d’une
                        simulation
                        d’entretien : quoi de mieux pour démystifier l’entretien, comprendre l’objet des questions
                        classiques et les préparer ?</p>
                    <b>Au programme :</b>
                    <p>
                        <ul>
                            <li>Diagnostic</li>
                            <li>Première simulation d’entretien</li>
                            <li>Débrief sur principaux points d’amélioration</li>
                            <li>Travail sur la forme et le fonds de l’entretien</li>
                            <li>Bref travail sur l’introduction et la conclusion</li>
                            <li>Remise de fiche de synthèse</li>
                            <li>Simulation d’entretien corrigée</li>
                            <li>Debrief final</li>
                        </ul>
                    </p>
                    <span style={{textDecoration: 'underline'}}><b><i>Tarif: 80 euros la séance</i></b></span>
                </div>

                <div style={{marginBottom: '40px'}}>
                    <h3 style={{textDecoration: 'underline'}}>Module de trois séances (diagnostic, forme, fond)</h3>
                    <p>La formation se déroule en module de trois séances de 1h30 espacées d’une semaine,
                        personnalisées, et adaptées à la demande particulière du candidat.</p>
                    <b>Séance 1 :</b>
                    <p>
                        <ul>
                            <li>Diagnostic</li>
                            <li>Première simulation d’entretien</li>
                            <li>Débrief sur les principaux points d’amélioration</li>
                            <li>Remise de fiche d’évaluation pour préparer la séance suivante</li>
                        </ul>
                    </p>
                    <b>Séance 2 :</b>
                    <p>
                        <ul>
                            <li>Travail sur la forme de la présentation</li>
                            <li>Travail sur l’introduction de l’entretien</li>
                            <li>Travail sur la conclusion de l’entretien</li>
                            <li>Simulation d’entretien corrigée</li>
                            <li>Debrief sur les axes d’amélioration</li>
                            <li>Remise de fiche d’évaluation pour préparer la séance suivante</li>
                        </ul>
                    </p>
                    <b>Séance 3 :</b>
                    <p>
                        <ul>
                            <li>
                                Travail sur le fond de la présentation
                                <ol>
                                    <li>Les questions récurrentes</li>
                                    <li>Les questions piège</li>
                                    <li>Les réponses et conduites à bannir</li>
                                </ol>
                            </li>
                            <li>
                                Travail sur l’écoute
                                <ol>
                                    <li>Qu’attend le Jury ?</li>
                                    <li>Comment vais-je faire la différence ?</li>
                                </ol>
                            </li>
                            <li>Simulation d’entretien corrigée</li>
                            <li>Debrief final</li>
                        </ul>
                    </p>
                    <span style={{textDecoration: 'underline'}}><b><i>Tarif: 220 euros le module</i></b></span>
                </div>

                <div style={{marginBottom: '40px'}}>
                    <h3 style={{textDecoration: 'underline'}}>Cours magistraux sur les techniques d’entretien</h3>
                    <p>En construction</p>
                </div>

            </div>
        </div>
    </div>;
};

export default Prestations;
