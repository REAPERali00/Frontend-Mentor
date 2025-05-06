import "./Form.css";
export default function Form() {
  return (
    <section className="form flex-center flex-col">
      <h1 className="form-heading">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p>Secure your spot at next year's biggest coding conference.</p>
      <form className="flex-col">
        <div className="form-section">
          <label>Upload Avatar</label>
          <div className="upload-box">
            <input type="file" id="avatar" />
            <label htmlFor="avatar">Drag and drop or click to upload </label>
            <small>Upload your photo (JPG or PNG, max size: 500KB).</small>
          </div>
        </div>
        {/* <HandleUpload /> */}
        <label>Full Name </label>
        <input type="text" />
        <label>Email Address</label>
        <input type="email" value="example@email.com" />
        <label>GitHub Username</label>
        <input type="text" value="@yourusername" />
        <input type="submit" value="Generate My Ticket" />
      </form>
    </section>
  );
}
