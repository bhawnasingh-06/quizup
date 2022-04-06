import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
const Signup = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 6000);
  };
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, cpassword } = credentials;
    if (password !== cpassword) {
      showAlert("Both passwords does not match :(", "danger");
    } else {
      const response = await fetch(
        "http://localhost:5000/api/users/createUsers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        //save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        showAlert("Account created successfully :)", "success");
        navigate("/user");
      } else {
        showAlert("User with this email id already exists :(", "danger");
      }
    }
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Alert alert={alert} />
      <div className="container my-2">
        <div className="card text-black" style={{ borderRadius: "35px" }}>
          <div className="card-body p-md-3">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control"
                        onChange={onchange}
                      />
                      <label className="form-label" htmlFor="username">
                        Your Name
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        onChange={onchange}
                      />
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        onChange={onchange}
                        minLength={5}
                        required
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        className="form-control"
                        onChange={onchange}
                        minLength={5}
                        required
                      />
                      <label className="form-label" htmlFor="cpassword">
                        Repeat your password
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
