import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      if (response.status === 200) {
        const { user } = response.data;
        dispatch(addUser(user));
      }
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.log(error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true },
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(addUser(response.data.data));
        navigate("/profile");
      }
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, isLoginForm, navigate]);

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 text-primary-content w-96 py-10">
        <div className="card-body">
          <h2 className="card-title underline">
            {isLoginForm ? "Login Form" : "SignUp Form"}
          </h2>
          <div>
            {!isLoginForm && (
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">FirstName</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </fieldset>
              </div>
            )}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                placeholder="Enter Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <p className="text-red-500">{error}</p>
            <button
              className="btn"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>
          <p
            className="font-bold cursor-pointer hover:underline"
            onClick={() => setIsLoginForm(!isLoginForm)}
          >
            {isLoginForm ? "New User? SignUp here!" : "Existing User? Login"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
