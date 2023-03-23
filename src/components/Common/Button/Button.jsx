import { Btn } from "./Button.styled";
import PropTypes from 'prop-types';

const Button = ({ text, name, onLeaveFeedback }) => {
    return <>
        <Btn onClick={onLeaveFeedback} data-name={name} type="button">{text}</Btn>
    </>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default Button