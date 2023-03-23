import { Btn } from "./Button.styled";
import PropTypes from 'prop-types';

const Button = ({ text, name, handleClicks }) => {
    return <>
        <Btn onClick={handleClicks} data-name={name} type="button">{text}</Btn>
    </>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleClicks: PropTypes.func.isRequired,
}

export default Button