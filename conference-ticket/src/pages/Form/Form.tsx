import "./Form.css";
import { useState } from "react";
import Upload from "../../commponents/Upload.tsx";

interface Form {
  name: string;
  email: string;
  userId: string | number;
}

interface FormProps {
  onSubmit: (person: Form | null) => void;
  avatar: File | null;
  setAvatar: (avatar: File | null) => void;
}

export default function Form({ onSubmit, avatar, setAvatar }: FormProps) {
  const [inputs, setInputs] = useState<Form>({
    name: "",
    email: "",
    userId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!avatar || !inputs.name || !inputs.email || !inputs.userId) {
      alert("Please make sure every field is filled and select an avatar");
      return;
    }
    onSubmit(inputs);
  };
  return (
    <section className="form flex-center flex-col">
      <h1 className="form-heading">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form className="form-form flex-col" onSubmit={handleSubmit}>
        <Upload avatar={avatar} setAvatar={setAvatar} />
        <label>Full Name </label>
        <input
          name="name"
          className="form-input"
          type="text"
          value={inputs.name}
          placeholder="Full name"
          onChange={handleChange}
        />
        <label>Email Address</label>
        <input
          name="email"
          className="form-input"
          type="email"
          value={inputs.email}
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <label>GitHub Username</label>
        <input
          name="userId"
          className="form-input"
          type="text"
          value={inputs.userId}
          placeholder="@yourusername"
          onChange={handleChange}
        />
        <input
          className="form-submit"
          type="submit"
          value="Generate My Ticket"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
