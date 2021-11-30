import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.Statistics}>
    <ul className={s.list}>
      <li className={s.item}>
        <span>Good: </span>
        {good}
      </li>
      <li className={s.item}>
        <span>Neutral: </span>
        {neutral}
      </li>
      <li className={s.item}>
        <span>Bad: </span>
        {bad}
      </li>
      <li className={s.item}>
        <span>Total: </span>
        {total}
      </li>
      <li className={s.item}>
        <span>Positive feedback: </span>
        {positivePercentage}%
      </li>
    </ul>
  </div>
);

Statistics.prototypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
