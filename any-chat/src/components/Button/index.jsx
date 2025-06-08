import PropTypes from 'prop-types'
import './button.scss'

const Button = ({className = "", children, rest}) => {
    return (
        <button className={[`btn`, `${className}`].join(' ')} {...rest}>
            <span className='btn-text'>{children}</span>
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;