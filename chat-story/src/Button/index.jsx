import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, variant, size, ...rest}) => {
  return (
    <button {...rest} className={[ `btn`, `btn-${variant}`, `btn-${size}`].join(' ')}>
        <span className='btn-txt'>{children}</span>
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf([`wide`, ``]),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
}

Button.defaultProps = {
    variant: 'primary',
    size: '',
    isDisabled: false,
    onClick: () => {}
}

export default Button