// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  });

  const handleChanges = (e) => {
    setValue({ ...value, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-blue-600"> Form In React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          onChange={(e) => handleChanges(e)}
          required
        />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          placeholder="Enter last Name"
          name="lastname"
          onChange={(e) => handleChanges(e)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChanges(e)}
          required
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="contact"
          name="contact"
          onChange={(e) => handleChanges(e)}
        />
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" onChange={(e) => handleChanges(e)} />
        Male
        <input type="radio" name="gender" onChange={(e) => handleChanges(e)} />
        Female
        <input type="radio" name="gender" onChange={(e) => handleChanges(e)} />
        Other
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={(e) => handleChanges(e)}>
          <option value="math">Math</option>
          <option value="guj">Gujarati</option>
          <option value="Hindi">Hindi</option>
          <option value="Physics">Physics</option>
        </select>
        <label htmlFor="resume">Resume</label>
        <input
          type="file"
          placeholder="Select Resume"
          name="resume"
          onChange={(e) => handleChanges(e)}
        />
        <label htmlFor="url"> URL </label>
        <input
          type="text"
          name="url"
          placeholder="Enter Image URL"
          onChange={(e) => handleChanges(e)}
        />
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="8"
          onChange={(e) => handleChanges(e)}
          placeholder="Enter Description"
        ></textarea>
        <button type="submit">Submit</button>
        <button type="button">Reset</button>
      </form>
    </div>
  );
}

export default App;
