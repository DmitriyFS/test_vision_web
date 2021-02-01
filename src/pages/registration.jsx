import React from "react";
import Button from "../components/buttonAction/button";
import InputComponents from "../components/inputComponents";

class Registration extends React.Component {
  state = {
    btnClicked: false,
    email: "",
    password: "",
    phone: "",
    invited_by: "RU-637164",
    name: "",
    surname: "",
    country_key: "RU",
  };

  buttonClick = () => {
    const {
      email,
      password,
      phone,
      invited_by,
      name,
      surname,
      country_key,
      btnClicked,
    } = this.state;

    if (!btnClicked) {
      this.setState({
        btnClicked: true,
      });
    }

    if (
      email &&
      password &&
      phone &&
      invited_by &&
      name &&
      surname &&
      country_key
    ) {
      console.log("buttonClick ВАЛИДНО, МОЖНО ОТПРАВЛЯТЬ ЗАПРОС", this.state);
    } else {
      console.log(
        "buttonClick НЕ ВАЛИДНО, НЕЛЬЗЯ ОТПРАВЛЯТЬ ЗАПРОС",
        this.state
      );
    }
  };

  render() {
    const {
      email,
      password,
      phone,
      invited_by,
      name,
      surname,
      country_key,
      btnClicked,
    } = this.state;

    return (
      <div className="registration">
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
        <InputComponents
          textName={"Телефон"}
          inputValue={phone}
          btnClicked={btnClicked}
          textMessage={
            "Международный формат. Может использоваться в качестве логина."
          }
          onChangeAction={(event) => {
            this.setState({
              phone: event.target.value,
            });
          }}
        />
        <InputComponents
          textName={"Invited by"}
          inputValue={invited_by}
          btnClicked={btnClicked}
          textMessage={"Это поле не может быть пустым."}
          onChangeAction={(event) => {
            this.setState({
              invited_by: event.target.value,
            });
          }}
        />
        <InputComponents
          textName={"Ваше имя"}
          inputValue={name}
          btnClicked={btnClicked}
          textMessage={"Это поле не может быть пустым."}
          onChangeAction={(event) => {
            this.setState({
              name: event.target.value,
            });
          }}
        />
        <InputComponents
          textName={"Ваша фамилия"}
          inputValue={surname}
          btnClicked={btnClicked}
          textMessage={"Это поле не может быть пустым."}
          onChangeAction={(event) => {
            this.setState({
              surname: event.target.value,
            });
          }}
        />
        <InputComponents
          textName={"Ключ страны"}
          inputValue={country_key}
          btnClicked={btnClicked}
          textMessage={"Это поле не может быть пустым."}
          onChangeAction={(event) => {
            this.setState({
              country_key: event.target.value,
            });
          }}
        />
        <Button buttonClick={this.buttonClick} />
      </div>
    );
  }
}

export default Registration;
