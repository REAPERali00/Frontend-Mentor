import { useState, useEffect } from "react";
import ticket_svg from "../../assets/images/pattern-ticket.svg";
import logo from "../../assets/images/logo-full.svg";
import avatar_def from "../../assets/images/icon-upload.svg";
import git_svg from "../../assets/images/icon-github.svg";
import "./Ticket.css";

interface TicketProps {
  name: string;
  userId: string;
  email: string;
  avatar: File | null;
}

function Ticket({ name, userId, email, avatar }: TicketProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!avatar) {
      setPreview(null);
    } else {
      const objectUrl = URL.createObjectURL(avatar);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [avatar]);
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
            <img src={preview || avatar_def} alt="avatar" />
            <div className="usr-name">
              <h2>{name}</h2>
              <div className="usr-id flex">
                <img src={git_svg} />
                <p>{userId}</p>
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
