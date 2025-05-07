import {} from "react";
import Form from "./pages/Form/Form";
// import Ticket from "./pages/Ticket/Ticket.tsx";
import logo from "./assets/images/logo-full.svg";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <div className="logo flex-center">
        <img src={logo} alt="logo" />
      </div>
      {/* <Form /> */}
      <Ticket />
    </div>
  );
}

export default App;
