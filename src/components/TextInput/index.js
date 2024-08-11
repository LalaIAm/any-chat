import React from 'react'

const TextInput = ({...rest}) => {
  return (
    <input {...rest} className='text-input' />
  )
}

export default TextInput