import "./Form.css";
import { useState } from "react";
import upload_icon from "../../assets/images/icon-upload.svg";
import info_icon from "../../assets/images/icon-info.svg";

interface Form {
  name: string;
  email: string;
  userId: string | number;
}

export default function Form() {
  const [inputs, setInputs] = useState<Form>({
    name: "",
    email: "",
    userId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <section className="form flex-center flex-col">
      <h1 className="form-heading">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form className="form-form flex-col">
        <div className="form-section">
          <label>Upload Avatar</label>
          <div className="upload-box">
            <img className="upload-box-img" src={upload_icon} alt="icon" />
            <br />
            <input type="file" id="avatar" />
            <label htmlFor="avatar">Drag and drop or click to upload </label>
          </div>
          <small className="form-tip flex">
            <img className="" src={info_icon} alt="icon" />
            Upload your photo (JPG or PNG, max size: 500KB).
          </small>
        </div>
        {/* <HandleUpload /> */}
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
