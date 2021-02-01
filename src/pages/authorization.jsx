import React from "react";
import Button from "../components/buttonAction/button";
import InputComponents from "../components/inputComponents";

class Authorization extends React.Component {
  state = {
    btnClicked: false,
    email: "",
    password: "",
  };

  buttonClick = () => {
    const { email, password, btnClicked } = this.state;
    if (!btnClicked) {
      this.setState({
        btnClicked: true,
      });
    }

    if (email && password) {
      console.log("buttonClick ВАЛИДНО, МОЖНО ОТПРАВЛЯТЬ ЗАПРОС", this.state);
    } else {
      console.log(
        "buttonClick НЕ ВАЛИДНО, НЕЛЬЗЯ ОТПРАВЛЯТЬ ЗАПРОС",
        this.state
      );
    }
  };

  render() {
    const { email, password, btnClicked } = this.state;

    return (
      <div className="authorization">
        <InputComponents
          textName={"Адрес электронной почты"}
          inputValue={email}
          btnClicked={btnClicked}
          textMessage={"Это поле не может быть пустым."}
          onChangeAction={(event) => {
            this.setState({
              email: event.target.value,
            });
          }}
        />
        <InputComponents
          textName={"Пароль"}
          inputType="password"
          inputValue={password}
          btnClicked={btnClicked}
          textMessage={"Это поле не может быть пустым."}
          onChangeAction={(event) => {
            this.setState({
              password: event.target.value,
            });
          }}
        />
        <Button buttonClick={this.buttonClick} />
      </div>
    );
  }
}

export default Authorization;
