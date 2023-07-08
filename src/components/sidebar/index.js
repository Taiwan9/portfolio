import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/img/T-home.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCode, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
const Sidebar = ()=>(
    <div className ="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'></img>
            <p>Taiwan</p>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className='project-link' to='/project'>
                <FontAwesomeIcon icon={faCode} color='#4d4d4e'></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer'
                 href='https://www.linkedin.com/in/taiwan-marinho-de-carvalho-313116110/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer'
                 href='https://github.com/Taiwan9'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer'
                 href='https://web.whatsapp.com/send?phone=55219779342465'>
                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar