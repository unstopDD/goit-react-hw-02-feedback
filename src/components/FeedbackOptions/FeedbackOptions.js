import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={s.button}
          name={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
