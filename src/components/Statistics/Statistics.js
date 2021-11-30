// import s from './Statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="Statistics">
    <ul className="Statistics__list">
      <li>
        <span>Good:</span>
        {good}
      </li>
      <li>
        <span>Neutral:</span>
        {neutral}
      </li>
      <li>
        <span>Bad:</span>
        {bad}
      </li>
      <li>
        <span>Total:</span>
        {total}
      </li>
      <li>
        <span>Positive feedback:</span>
        {positivePercentage}%
      </li>
    </ul>
  </div>
);

export default Statistics;
