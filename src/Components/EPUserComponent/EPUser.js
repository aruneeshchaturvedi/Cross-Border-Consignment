    import './EPUser.css';
    import { useState } from 'react';
    import axios from 'axios';
    import { _userapiurl } from '../../api.url';
    import { useNavigate } from 'react-router-dom';
    import { useEffect } from 'react';
    import { submitHandler } from 'react'
    import {EPUser} from 'react';


    function EPAdmin() {


      const [userDetails, setUserDetails] = useState([]);


      const navigate = useNavigate();
      var [name, setName] = useState();
      var [email, setEmail] = useState();
      var [mobile, setMobile] = useState();
      var [address, setAddress] = useState();
      var [city, setCity] = useState();
      var [gender, setGender] = useState();
      var [output, setOutput] = useState();



      useEffect(() => {
        axios.get(_userapiurl + "fetch?email=" + localStorage.getItem("email")).then((response) => {

          setName(response.data[0].name);
          setEmail(response.data[0].email);
          setMobile(response.data[0].mobile);
          setAddress(response.data[0].address);
          setCity(response.data[0].city);
          setGender(response.data[0].gender);
        }).catch((err) => {
          console.log(err);
        });
      }, []);
      const submitHandle = () => {

        let updateDetails = { "condition_obj": { "email": email }, "content_obj": { "name": name, "email": email, "mobile": mobile, "address": address, "city": city, "gender": gender } };
        axios.patch(_userapiurl + "update", updateDetails).then((response) => {
          setOutput("Profile Updated")
          navigate("/epadmin")
        }).catch((error) => {
          setOutput("Updatedation Failed")
          console.log(error);
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

                      <br />
                      <font color="red">{output} </font>
                      <h2>Edit Profile <span>Here!!!</span><br /></h2>

                      <br />

                      <form >
                        <div class="form-group">
                          <label for="name">Name:</label>
                          <input type="text" class="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div class="form-group">
                          <label for="email">Email address:</label>
                          <input type="text" class="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                        </div>

                        <div class="form-group">
                          <label for="mobile">Mobile:</label>
                          <input type="text" class="form-control" id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} />

                        </div>

                        <div class="form-group">
                          <label for="address">Address:</label>
                          <textarea value={address} onChange={e => setAddress(e.target.value)} rows="5" class="form-control"></textarea>
                        </div>

                        <div class="form-group">
                          <label for="city">City:</label>
                          <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
                            <option>Select City</option>
                            <option>Indore</option>
                            <option>Bhopal</option>
                            <option>Ujjain</option>
                          </select>
                        </div>


                        <div class="form-group">
                          <label for="gender">Gender:</label>
                          &nbsp;&nbsp;
                          Male <input type="radio" name="gender" checked={gender === "male"} value="male" onChange={e => setGender(e.target.value)} />
                          &nbsp;&nbsp;
                          Female <input type="radio" name="gender" checked={gender === "female"} value="female" onChange={e => setGender(e.target.value)} />
                        </div>

                        <button type="button" onClick={submitHandle} class="btn btn-primary">Submit</button>


                      </form >
                      <br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* end about section */}

        </>
      );
    }

    export default EPUser;

