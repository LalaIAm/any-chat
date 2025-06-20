import React from 'react'
import JoinModal from '../../components/JoinModal'
import './join-chat.scss';

const JoinChat = () => {
  return (
    <div className='join-chat-modal'>
      <div className='logo'>
        <div className='layer-1-parent'>
          <img className='layer-1-icon' 
          loading='lazy'
          alt='logo'
          src='/images/logo.svg' />
         
          </div>
        </div>
        <main className='join-chat-main'>
      <JoinModal />
      </main>
    </div>
  )
}

export default JoinChat