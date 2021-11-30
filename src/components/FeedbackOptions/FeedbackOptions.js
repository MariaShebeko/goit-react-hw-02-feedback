// import s from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="FeedbackOptions">
    {options.map(option => (
      <button
        className="button"
        type="button"
        key={option}
        feedback={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
