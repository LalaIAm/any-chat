import React, {useCallback} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import './home.scss';


const HomePage = () => {
  const navigate = useNavigate()

  const onButtonClick = useCallback(() => {
    navigate('/join-chat')
  }, [navigate])
  
  return (
    <div className='home-page'>
        <div className='logo-parent'>
            <Logo data-test='logo' />
            <section 
            data-test='left-column' className='chat-anywhere-with-anyone-parent'>
                <h1 data-test='title' className='chat-anywhere-with'>Chat anywhere with anyone</h1>
                <Link to='/join-chat'  data-test='get-started' className='small-btn' onClick={() => onButtonClick}>Get Started</Link>
            </section>
        </div>
    <div data-test='right-column' className='hand-with-mobile-1-wrapper'>
        <img className='hand-with-mobile-1-icon' 
        loading='lazy' alt='' src="/images/hand-with-mobile-1.png" data-test='phone-img' />
    </div>
    </div>
  )
}

export default HomePage