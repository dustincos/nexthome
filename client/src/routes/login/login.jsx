import { useContext, useState, useEffect } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

// const baseUrl = process.env.REACT_APP_API_BASE_URL;

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if user is already logged in
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("http://localhost:8800/api/auth/login", {
        username,
        password,
      });

      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
            autoComplete="username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            autoComplete="current-password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      {/* <div className="imgContainer">
        <img src="/value.jpg" alt="" />
      </div> */}
    </div>
  );
}

export default Login;
