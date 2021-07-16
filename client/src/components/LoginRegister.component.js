import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../componentsStyles/LoginRegister.module.css";
import Login from "./Login.component";
import Register from "./Register.component";

function LoginRegister(props) {
  let history = useHistory();
  if (localStorage.getItem("loggedin")) history.push("/");
  return (
        <div className={styles.container}>
              <h1>Quiztion</h1>
              <p>It's fun, we promise!</p>
      <Login {...props} />
      <Register />
    </div>
  );
}

export default LoginRegister;
