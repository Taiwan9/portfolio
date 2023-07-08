import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Loader from 'react-loaders'
import './index.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCss3, faGithub, faHtml5, faJsSquare, faNode, faReact } from "@fortawesome/free-brands-svg-icons"

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return (
        <>
            <div className="container about-page">
                <div className="text-zone about-text-zone mob-text-zone">
                        <h1>
                            <AnimatedLetters strArray={['S','o','b','r','e',' ','m','i','n']}
                                idx={15}
                                letterClass={letterClass}></AnimatedLetters>
                        </h1>
                        <p>
                        Sou um desenvolvedor Fullstack muito ambicioso com experiência no mercado
                        de TI, trabalho com as tecnologias mais recentes e de qualidades do mercado tanto no frontend
                        quanto no backend domino front end com HTMl, CSS, JavaScript, React, React-native, Nodejs,
                        Banco de Dados relacionais e não relacionais e uma ótima logica de programção e pensamento analítico sobre
                        todos os casos.
                    </p>
                    <p align="LEFT">
                    Sou tranquilo, confiante, senso de liderança flexível, adaptável e 
                    naturalmente curioso e sempre trabalhando para melhorar
                    minhas habilidades, um problema de design por vez.
                        </p>
                    <p>
                    Se eu precisar me definir em uma frase, seria uma pessoa de carater, honra,
                    sempre disposto, fanático por esportes principalmente luta e academia, entusiasta de games e obcecado por tecnologia!!!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529"></FontAwesomeIcon>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9"></FontAwesomeIcon>
                        </div>
                        <div className="face1">
                            <FontAwesomeIcon icon={faJsSquare} color="#efd81d"></FontAwesomeIcon>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4"></FontAwesomeIcon>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faNode} color="#4caf50"></FontAwesomeIcon>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="#000000"></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    )
}

export default About