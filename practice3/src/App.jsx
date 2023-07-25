/* eslint-disable no-const-assign */
/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "./Component/ButtonSave";
import Header from "./Component/Header";
import Statistics from "./Component/Statastics";

const App = () => {
  // save clicks of each button to its own state
  // eslint-disable-next-line no-unused-vars
  const [good, setGood] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [natural, setNatural] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const handleGood = () => {
    setGood((pre) => pre + 1);
    setTotal(total + 1);
  };

  const handleBad = () => {
    setBad((pre) => pre + 1);
    setTotal(total + 1);
  };

  const handleNatural = () => {
    setNatural((pre) => pre + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <Header name="give feedback " />

      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleBad} text="bad" />
      <Button handleClick={handleNatural} text="natural" />

      <Statistics statistics={[good, natural, bad, total]} />
    </div>
  );
};

export default App;
