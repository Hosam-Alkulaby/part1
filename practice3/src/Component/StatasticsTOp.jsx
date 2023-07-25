/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
const StatisticTOP = ({ text, value }) => {
  if (text === "positive") {
    return (
      <div>
        <td>
          {text} {value} %
        </td>
      </div>
    );
  }

  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  );
};

export default StatisticTOP;
