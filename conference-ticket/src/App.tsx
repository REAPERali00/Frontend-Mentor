import {} from "react";
import Form from "./pages/Form/Form";
import logo from "./assets/images/logo-full.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="logo flex-center">
        <img src={logo} alt="logo" />
      </div>
      <Form />
    </div>
  );
}

export default App;
