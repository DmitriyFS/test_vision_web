import Header from "./components/header";
import Main from "./pages/main";
import Registration from "./pages/registration";
import Authorization from "./pages/authorization";
import "./App.css";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/signup" render={() => <Registration />} />
        <Route exact path="/login" render={() => <Authorization />} />
      </div>
    </div>
  );
};

export default App;
