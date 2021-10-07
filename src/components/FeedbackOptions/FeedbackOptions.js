// import "./FeedbackOptions.css";
import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const changeCase = (str) => str.toUpperCase();
  return (
    <div className={s.feedbackContainer}>
      {options.map((option, index) => (
        <button
          className={s.feedbackButton}
          key={index}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {changeCase(option)}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
