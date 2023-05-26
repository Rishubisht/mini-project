import React, { useState } from 'react'
import crime from '../img/download (5).jpg'
export default function Home(props) {

    return (
        <>
            <main>

                <div className={`container text-${props.mode == 'light' ? 'dark' : 'light'} `}>
                    <h2 id="crimeHeading">Crime</h2>

                    <p>A crime is an illegal action or activity for which a person can be punished by law.<br />
                        crime, the intentional commission of an act usually deemed socially harmful or dangerous
                        and specifically defined, prohibited, and punishable under criminal law.
                    </p>

                    <h2>Overview</h2>
                    <p>
                        When informal relationships prove insufficient to establish and maintain a desired social order, a government or a state may impose more formalized or stricter systems of social control. With institutional and legal machinery at their disposal, agents of the state can compel populations to conform to codes and can opt to punish or attempt to reform those who do not confirm
                        <details>

                            .<summary>.......</summary>
                            Authorities employ various mechanisms to regulate (encouraging or discouraging) certain behaviors in general. Governing or administering agencies may for example codify rules into laws, police citizens and visitors to ensure that they comply with those laws, and implement other policies and practices that legislators or administrators have prescribed with the aim of discouraging or preventing crime. In addition, authorities provide remedies and sanctions, and collectively these constitute a criminal justice system. Legal sanctions vary widely in their severity; they may include (for example) incarceration of temporary character aimed at reforming the convict. Some jurisdictions have penal codes written to inflict permanent harsh punishments: legal mutilation, capital punishment, or life without parole.
                            Usually, a natural person perpetrates a crime, but legal persons may also commit crimes. Historically, several premodern societies believed that non-human animals were capable of committing crimes, and prosecuted and punished them accordingly.

                            The sociologist Richard Quinney has written about the relationship between society and crime. When Quinney states "crime is a social phenomenon" he envisages both how individuals conceive crime and how populations perceive it, based on societal norms.
                        </details>
                    </p>

                </div>

                <div className={`container text-${props.mode == 'light' ? 'dark' : 'light'} d-flex flex-direction-row flex-wrap justify-content-center align-items-center`}>
                   
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `} style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
             <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Organized crime</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Drug Trafficing</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `} style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Voilence</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Robbery</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Money Laundring</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Kidnapping</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Human Trafficing</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Property Crime</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary ">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Accidental Crime</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary">ReadMore</a>
                        </div>
                    </div>
                    <div className={`card mx-3 my-3 card-${props.mode} bg-${props.mode} `}  style={{width:"18rem"}}>
                        <img src={require('../img/download (5).jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Card title</h5>
                            <p className={`card-text text-${props.mode == 'light' ? 'dark' : 'light'}`}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-outline-primary ">ReadMore</a>
                        </div>
                    </div>

                    
                </div>
            </main>

        </>
    )

}


