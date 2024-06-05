import './CPUser.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../api.url';
import { useNavigate } from 'react-router-dom';

function CPUser() {

  const navigate = useNavigate();
  const [ output , setOutput ] = useState();
  const [ opassword , setOldPassword ] = useState();
  const [ npassword , setNewPassword ] = useState();
  const [ cnpassword , setConfirmNewPassword ] = useState();

  const handleSubmit=()=>{
    
    axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
      if(npassword==cnpassword)
      {
        let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};      
        axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
          alert("Password changed ,please login again....");
          navigate("/logout");  
        }).catch((error)=>{
          console.log(error);    
        });
      } 
      else
      {
        setOutput("New & Confirm new password mismatch");
        setNewPassword("");
        setConfirmNewPassword("");
      }  
    }).catch((error)=>{
      setOutput("Invalid old password");
      setOldPassword("");
    });

  };
 
  return (
<>
    {/* about section */}
  
    <section class="about_section">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
            <div class="detail-box">
              <div class="heading_container">
                <br/>
                <h1>Change Password Here!!!</h1>
              </div>
              
<font color="blue">{output}</font>
<br/>
<form>
  <div class="form-group">
    <label for="opwd">Old Password:</label>
    <input type="password" class="form-control" value={opassword} onChange={ e => setOldPassword(e.target.value) } />
  </div>
  <div class="form-group">
    <label for="npwd">New Password:</label>
    <input type="password" class="form-control" value={npassword} onChange={ e => setNewPassword(e.target.value) } />
  </div>
  <div class="form-group">
    <label for="cnpwd">Confirm New Password:</label>
    <input type="password" class="form-control" value={cnpassword} onChange={ e => setConfirmNewPassword(e.target.value) } />
  </div>
  <button onClick={handleSubmit} type="button" class="btn btn-primary">Submit</button>
</form>              
<br/>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* end about section */}

</>
  );
}

export default CPUser;

