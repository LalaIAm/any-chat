import React, {useState, useEffect} from 'react'
import './join-modal.scss';
import { useNavigate } from 'react-router-dom';

const JoinModal = () => {
    const [name, setName] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
         const isDisabled = () => {
        if(!name || name.length < 3 || name.length > 61) {
            return true;
        }
        return false;
    }

    setDisabled(isDisabled())

    }, [name])

    useEffect(() => {
        const setMessage = () => {
            if(name.length < 3) {
                setErrorMessage('Nickname is too short.')
        } else if (name.length > 61) {
            setErrorMessage('Nickname is too long.')
        } else {
            setErrorMessage('')
        }}
setMessage()
    
    }, [name])

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/chat')
    }

   
  return (
    <form className='joinmodal'>
<div className='input-area-parent'>
    <div className='input-area'>
        <h1 className='please-enter-your-container'>
            <p className='please-enter-your'>Please enter your nickname</p>
            <p className='and-join-chat'>and join chat</p>
        </h1>
        <div className='component-8default'>
            <input className='textinput' placeholder="Enter your nickname" type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <p className='error-message'>{errorMessage}</p>
            <div className='text-field-an-wrapper'>
                <div className='text-field-an'>
                    <div className='nickname-wrapper'>
                        <div className='nickname'>Nickname</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button data-test='login-btn' className='button1' type='button' disabled={disabled} onClick={handleSubmit}>
        <div className='get-started5'>Get Started</div>
    </button>
</div>
    </form>
  )
}

export default JoinModal