import "./Form.css";
import icon from "../../assets/images/icon-upload.svg";
export default function Form() {
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
            <img className="upload-box-img" src={icon} alt="icon" />
            <br />
            <input type="file" id="avatar" />
            <label htmlFor="avatar">Drag and drop or click to upload </label>
          </div>
          <small className="form-tip">
            Upload your photo (JPG or PNG, max size: 500KB).
          </small>
        </div>
        {/* <HandleUpload /> */}
        <label>Full Name </label>
        <input className="form-input" type="text" />
        <label>Email Address</label>
        <input className="form-input" type="email" value="example@email.com" />
        <label>GitHub Username</label>
        <input className="form-input" type="text" value="@yourusername" />
        <input
          className="form-submit"
          type="submit"
          value="Generate My Ticket"
        />
      </form>
    </section>
  );
}
