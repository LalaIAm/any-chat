import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import {useNavigate} from 'react-router-dom'

const JoinChat = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate()

  let isDisabled = nickname.length < 3 || nickname.length > 64;

  const onSubmit = () => {
    navigate('/chat')
  }

  console.log(isDisabled);
  return (
    <div className="join-chat">
      <header>
        <img data-test='logo' src="/logo.png" alt="logo" className="logo" />
      </header>
      <div data-test='join-modal' className="join-modal">
        <h3>
          Please enter your nickname <br /> and join chat
        </h3>
        <div className="input-wrapper">
          <label htmlFor="nickname">Nickname</label>
          <TextInput 
            data-test='nickname-input'
            placeholder="Enter your nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
          <div>
          {nickname.length > 0 && nickname.length < 3 && (
            <p data-test='short' className="input-error">Your nickname is too short</p>
            )}
            {nickname.length > 0 && nickname.length > 64 && (
              <p data-test='long' className='input-error'>Your nickname is too long</p>
            )}
            </div>
        </div>
        <Button data-test='btn' disabled={isDisabled} onClick={onSubmit}>Join Chat</Button>
      </div>
    </div>
  );
};

export default JoinChat;
