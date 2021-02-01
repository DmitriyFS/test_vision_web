import "./inputComponents.css";

const InputComponents = (props) => {
  const {
    textName,
    inputValue,
    textMessage,
    onChangeAction,
    inputType,
    btnClicked,
  } = props;

  return (
    <div className="input-component">
      <div className="input-component__name">{textName}</div>
      <input
        type={inputType || "text"}
        className="input-component__input"
        value={inputValue}
        onChange={onChangeAction}
      />
      {btnClicked && !inputValue && (
        <div className="input-component__message">{textMessage}</div>
      )}
    </div>
  );
};

export default InputComponents;
