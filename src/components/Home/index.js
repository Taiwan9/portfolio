import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import pdfCurrilulo from '../../assets/pdf/curriculo-ti.pdf'

const Home =()=>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','i','w','a','n',]
    const jobArray = ['F','u','l','l','S','t','a','c','k',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <>
        <div className="container home-page" onEncrypted={pdfCurrilulo}>
          <div className="text-zone">
            <h1>
              <span className={letterClass}>Oi, </span>
              <br />
              <span className={`${letterClass} _12`}>Eu</span>
              <span className={`${letterClass} _12`}></span>
              <span className={`${letterClass} _13`}>sou</span>
              <span className={`${letterClass} _13`}></span>
              <span className={`${letterClass} _14`}>T</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={16}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={16}
              />
            </h1>
            <h2>React / React Native / Node / TypeScript</h2>
              <a href={pdfCurrilulo} rel='noreferrer' target='_blank'>Curriculo</a>
          </div>
          <Logo/>
        </div>
        <Loader type='pacman'></Loader>
      </>
    )
}

export default Home