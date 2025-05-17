import "./Form.css";
import { useState } from "react";
import info_icon from "../../assets/images/icon-info.svg";
import Upload from "../../commponents/Upload.tsx";
import type { Person } from "../../App";

type Form = Person;

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
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    userId?: string;
    avatar?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!inputs.name.trim()) newErrors.name = "Full name is required.";
    if (!inputs.email.trim())
      newErrors.email = "Please enter a valid email address.";
    else if (!/\S+@\S+\.\S+/.test(inputs.email))
      newErrors.email = "Please enter a valid email address.";
    if (!inputs.userId.toString().trim())
      newErrors.userId = "GitHub username is required.";
    if (!avatar) newErrors.avatar = "Please upload a photo under 500KB.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onSubmit(inputs);
  };
  return (
    <section className="form flex-center flex-col">
      <h1 className="form-heading">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form className="form-form flex-col" onSubmit={handleSubmit}>
        <Upload avatar={avatar} setAvatar={setAvatar} error={errors.avatar} />
        <label>Full Name </label>
        <input
          name="name"
          className="form-input"
          type="text"
          value={inputs.name}
          placeholder="Full name"
          onChange={handleChange}
        />
        {errors.name && (
          <small className="form-error form-tip flex">
            <img className="" src={info_icon} alt="icon" />
            {errors.name}
          </small>
        )}
        <label>Email Address</label>
        <input
          name="email"
          className="form-input"
          type="email"
          value={inputs.email}
          placeholder="example@email.com"
          onChange={handleChange}
        />

        {errors.email && (
          <small className="form-error form-tip flex">
            <img className="form-error" src={info_icon} alt="icon" />
            {errors.email}
          </small>
        )}
        <label>GitHub Username</label>
        <input
          name="userId"
          className="form-input"
          type="text"
          value={inputs.userId}
          placeholder="@yourusername"
          onChange={handleChange}
        />

        {errors.userId && (
          <small className="form-error form-tip flex">
            <img className="" src={info_icon} alt="icon" />
            {errors.userId}
          </small>
        )}
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
