import { useState } from "react";
import ticket_svg from "../../assets/images/pattern-ticket.svg";
import logo from "../../assets/images/logo-full.svg";
import "./Ticket.css";

function Ticket() {
  const [name, setName] = useState("Jonatan Kristof");
  const [email, setEmail] = useState("jonatan@email.com");
  return (
    <div className="ticket flex-col flex-center">
      <h1 className="ticket-head">
        Congrats, <span className="highlight">{name}</span>!<br /> Your ticket
        is ready.
      </h1>
      <p>
        We've emailed your ticket to {email} and will send updates in the run up
        to the event.
      </p>
      <div>
        <img src={ticket_svg} alt="ticket" />
        <img src={logo} alt="logo" />
        Coding Conf Jan 31, 2025 / Austin, TX
      </div>
    </div>
  );
}

export default Ticket;
