import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetter from '../AnimatedLetters/index'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm(
            'service_g8m6bfm',
            'template_0cdxg4g', 
            form.current,
            'A9RG7hZa7G47oO59W')
          .then(
            () => {
              alert('Mensagem enviada com sucesso! em breve entro em contato')
              window.location.reload(false)
            },
            () => {
              alert('Mensagem não enviada!')
            }
          )
      }

  
    return(
      <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 't', 'o']}
              idx={15}
            />
          </h1>
          <p>
          Estou interessado em oportunidades freelance - especialmente em projetos ambiciosos ou grandes. 
          No entanto, se você tiver outras solicitações ou perguntas, não hesite em entrar em contato comigo 
          usando o formulário abaixo.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nome" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Assunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Menssagem"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
    )
}

export default Contact