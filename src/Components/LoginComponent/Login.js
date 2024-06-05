import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    if (email == undefined || password == undefined) {

      setOutput("Invalid user or verify your account....");
    }

    else {



      var userDetails = { "email": email, "password": password };
      axios.post(_userapiurl + "login", userDetails).then((response) => {
        //console.log(response.data);
        var users = response.data.userDetails;
        localStorage.setItem("_id", users._id);
        localStorage.setItem("name", users.name);
        localStorage.setItem("email", users.email);
        localStorage.setItem("mobile", users.mobile);
        localStorage.setItem("address", users.address);
        localStorage.setItem("city", users.city);
        localStorage.setItem("gender", users.gender);
        localStorage.setItem("info", users.info);
        localStorage.setItem("role", users.role);
        localStorage.setItem("token", response.data.token);

        users.role === "admin" ? navigate("/admin") : navigate("/user");
        setEmail("");
        setPassword("");

      }).catch((error) => {
        setOutput("Invalid user or verify your account....");
        setEmail("");
        setPassword("");
      });
    }
  };

  return (
    <>
      {/* about section */}

      <section class="about_section">
        <div class="heading_container">
          <div class="container  ">
            <div class="row">
              <div class="col-md-12">
                <h2><b>Login</b> <span> <b>Here!!!</b> </span></h2>
                <font color="red">{output}</font>
                <br />
                <form>
                  <div class="form-group">
                    <label for="email"><b>Email address:</b></label>
                    <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} /> 
                  </div>
                  <div class="form-group">
                    <label for="pwd"><b>Password:</b></label>
                    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                  <button onClick={handleSubmit} type="button" class="btn btn-primary"><b>Submit</b></button>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br/>

      {/* end about section */}

    </>
  );
}

export default Login;