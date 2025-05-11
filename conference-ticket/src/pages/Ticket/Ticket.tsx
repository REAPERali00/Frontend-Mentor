import { useState } from "react";
import ticket_svg from "../../assets/images/pattern-ticket.svg";
import logo from "../../assets/images/logo-full.svg";
import avatar from "../../assets/images/image-avatar.jpg";
import git_svg from "../../assets/images/icon-github.svg";
import "./Ticket.css";

function Ticket() {
  const [name, setName] = useState("Jonatan Kristof");
  const [gitId, setGitId] = useState("@jonatankristof0101");
  const [email, setEmail] = useState("jonatan@email.com");
  return (
    <div className="ticket flex-col flex-center">
      <h1 className="ticket-head">
        Congrats, <span className="highlight">{name}</span>! Your ticket is
        ready.
      </h1>
      <p>
        We've emailed your ticket to <br />
        <span className="orange-txt">{email}</span> and will send updates in the
        run up to the event.
      </p>
      <div className="ticket-main">
        <img src={ticket_svg} alt="ticket background" className="ticket-bg" />
        <div className="ticket-left">
          <img src={logo} alt="logo" />
          <div className="ticket-event">
            <p>Jan 31, 2025 / Austin, TX</p>
          </div>

          <div className="usr-info flex">
            <img src={avatar} alt="avatar" />
            <div className="usr-name">
              <h2>{name}</h2>
              <div className="usr-id flex">
                <img src={git_svg} />
                <p>{gitId}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ticket-right">
          <div className="ticket-code">#010609</div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
