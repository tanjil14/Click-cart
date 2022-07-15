import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    history.push("/");
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">SIGN IN</h1>
        <form>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>LOGIN</button>
          {/* {error && <span>Something went wrong...</span>} */}
        </form>
      </div>
    </div>
  );
};

export default Login;
