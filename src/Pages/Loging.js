import React, { useState } from "react";
import "./Style.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submit");

    if (email.length === 0) {
      alert("Email is blank");
    } else if (password.length === 0) {
      alert("Password is blank");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      axios({
        method: "post",
        url: 'http://localhost/demo3/src/loging.php',
        config: { headers: { "Content-Type": "multipart/formData" } },
        data: formData,
      })
        .then(function (response) {
          console.log(response);
          alert("success");
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
