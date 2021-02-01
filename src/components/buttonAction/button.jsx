import "./button.css";

const Button = ({ buttonClick }) => {
  return (
    <div className="button-container">
      <button onClick={buttonClick} className="button-action">
        POST
      </button>
    </div>
  );
};

export default Button;
