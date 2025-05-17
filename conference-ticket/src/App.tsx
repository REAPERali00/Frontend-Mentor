import { useState } from "react";
import Form from "./pages/Form/Form";
import Ticket from "./pages/Ticket/Ticket.tsx";
import logo from "./assets/images/logo-full.svg";
import "./App.css";

export interface Person {
  name: string;
  userId: string;
  email: string;
}

function App() {
  // const [person, setPerson] = useState<Person>({
  //   name: "Jonatan Kristof",
  //   userId: "@jonatankristof0101",
  //   email: "jonatan@email.com",
  // });
  const [person, setPerson] = useState<Person | null>();
  const [avatar, setAvatar] = useState<File | null>(null);

  return (
    <div className="App container">
      <div className="logo flex-center">
        <img src={logo} alt="logo" />
      </div>
      {!person && (
        <Form onSubmit={setPerson} avatar={avatar} setAvatar={setAvatar} />
      )}
      {person && (
        <Ticket
          name={person.name}
          userId={person.userId}
          email={person.email}
          avatar={avatar}
        />
      )}
    </div>
  );
}

export default App;
