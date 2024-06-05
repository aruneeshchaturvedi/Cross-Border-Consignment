import './CPAdmin.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';


function CPAdmin() {

  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [opassword, setOldPassword] = useState();
  const [npassword, setNewPassword] = useState();
  const [cnpassword, setConfirmNewPassword] = useState();
  const handleSubmit = () => {

    axios.get(_userapiurl + "fetch?email=" + localStorage.getItem("email") + "&password=" + opassword).then((response) => {
      if (npassword == cnpassword) {

        let updateDetails = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "password": cnpassword } };
        axios.patch(_userapiurl + "update", updateDetails).then((response) => {
          alert("The password has been changed ,please login again....");
          navigate("/logout");

        }).catch((error) => {
          console.log(error);
        });

      }

      else {
        setOutput("New & Confirm new password mismatch");
        setNewPassword("");
        setConfirmNewPassword("");
      }


    }).catch((error) => {
      setOutput("Invalid old password");
      setOldPassword("");
    });

  };

  return (
    <>

      <section class="about_section layout_padding-bottom">
        <div class="heading_container">
          <div class="container  ">
            <div class="row">
              <div class="col-md-12">
                <div class="detail-box">
                  <br/>
                <h2><b>Change Password</b> <span><b>Here!!!</b></span><br /></h2>
                </div>
                <font color="red">{output}</font>
                <br />
                <form>

                  <div class="form-group">
                    <label for="opwd"><b>Old Password:</b></label>
                    <input type="password" class="form-control" value={opassword} onChange={e => setOldPassword(e.target.value)} />
                  </div>
                  <div class="form-group">
                    <label for="npwd"><b>New Password:</b></label>
                    <input type="password" class="form-control" value={npassword} onChange={e => setNewPassword(e.target.value)} />
                  </div>
                  <div class="form-group">
                    <label for="cnpwd"><b>Canfirm New Password:</b></label>
                    <input type="password" class="form-control" value={cnpassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                  </div>
                  <button onClick={handleSubmit} type="button" class="btn btn-primary"><b>Submit</b></button>
                </form>
              </div>
            </div>
            {/* <div class="col-md-6 ">
              <div class="img-box">
                <img src="assets/images/pc.jpg" alt="" />
              </div>
            </div> */}

          </div>
        </div>
      </section>


      {/* <!-- end about section --> */}
    </>
  )
}
export default CPAdmin;