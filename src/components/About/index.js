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
                <div className="text-zone">
                        <h1>
                            <AnimatedLetters strArray={['A','b','o','u','t',' ','m','e']}
                                idx={15}
                                letterClass={letterClass}></AnimatedLetters>
                        </h1>
                        <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                        </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, father of a beautiful daughter, a sports fanatic,
                        photography enthusiast, and tech-obsessed!!!
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