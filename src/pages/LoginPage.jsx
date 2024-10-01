import axios from "axios";
import React, { useState } from "react";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    const user = { username, password };

    axios.post("http://localhost:3000/user/login", user).then((response) => {
      const user = response.data;
      dispatch(setUser(user));
    });
  };
  return (
    <div className="container w-75 mx-auto">
      <form
        className="container my-5 d-flex flex-column gap-4"
        onSubmit={loginHandler}
      >
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
