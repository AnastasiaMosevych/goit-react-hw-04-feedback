import Button from "components/Common/Button/Button";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <>
        {options.map(option => (
            <Button key={option} handleClicks={onLeaveFeedback} text={option} name={option}></Button>
        ))}
    </>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions
 