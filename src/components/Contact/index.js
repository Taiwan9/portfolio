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
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

  
    return(
        <>
            <div className="Container contact-page">
              <div className='text-zone'>
                <h1>
                    <AnimatedLetter
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                        <input placeholder="Name" type="text" name="user_name" required />
                    </li>
                    <li className="half">
                    <input
                        placeholder="Email"
                        type="email"
                        name="user_email"
                        required
                    />
                    </li>
                    <li>
                    <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                    />
                    </li>
                    <li>
                    <textarea
                        placeholder="Message"
                        name="message"
                        required
                    ></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND" />
                    </li>
                 </ul>
                </form>
            </div>  
              </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact