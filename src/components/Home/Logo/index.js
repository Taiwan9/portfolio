import './index.scss'
import LogoS from '../../../assets/img/meCartoon2.jpeg'
import { useEffect, useRef } from 'react'

const  Logo = ()=> {

    useEffect(() => {})

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt='LogoS'/>
        </div>
    )
}

export default Logo