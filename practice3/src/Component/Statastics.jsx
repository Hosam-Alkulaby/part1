import StatisticTOP from "./StatasticsTOp";

/* eslint-disable react/prop-types */
const Statistics = ({ statistics }) => {
  const good = statistics[0];
  const natural = statistics[1];
  const bad = statistics[2];
  const total = statistics[3];

  const average = () => (good - bad) / total;
  const positive = () => (good * 100) / total + "%";

  return (
    <>
      <h2>Statistics</h2>
      {total === 0 ? (
        "No FeedBack Given"
      ) : (
        <table>
          <StatisticTOP text="good" value={good} />
          <StatisticTOP text="neutral" value={natural} />
          <StatisticTOP text="bad" value={bad} />
          <StatisticTOP text="all" value={total} />
          <StatisticTOP text="average" value={average()} />
          <StatisticTOP text="positive" value={positive()} />
        </table>
      )}
    </>
  );
};

export default Statistics;
