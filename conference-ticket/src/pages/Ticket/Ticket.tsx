import { useState } from "react";

function Ticket() {
  const { name, setName } = useState("Jonatan Kristof");
  const { email, setEmail } = useState("jonatan@email.com");
  return (
    <div className="ticket flex-col">
      <h1>Congrats, {name} Your ticket is ready.</h1>
      <p>
        We've emailed your ticket to {email} and will send updates in the run up
        to the event.
      </p>
      <div>Coding Conf Jan 31, 2025 / Austin, TX</div>
    </div>
  );
}

export default Ticket;
