/* eslint-disable react/prop-types */
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

export default Button;
