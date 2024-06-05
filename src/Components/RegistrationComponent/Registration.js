import { useState } from "react";
import './Registration.css';
import axios from "axios";
import { _userapiurl } from "../../api.url";

function Registration() {
    var [name, setName] = useState();
    var [email, setEmail] = useState();
    var [password, setPassword] = useState();
    var [mobile, setMobile] = useState();
    var [address, setAddress] = useState();
    var [city, setCity] = useState();
    var [gender, setGender] = useState();
    var [output, setOutput] = useState();


    const submitHandler = () => {

        var obj = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender, "output": output }
        axios.post("http://localhost:3001/user/save", obj).then(() => {
            console.log(obj);
            alert("Data inserted...");
            setName("");
            setEmail("");
            setPassword("");
            setAddress("");
            setCity("");
            // setGender("");
            setMobile("");
        }).catch((err) => {
            console.log(err)
            alert("data failed...")
            setName("");
            setEmail("");
            setPassword("");
            setAddress("");
            setCity("");
            // setGender("");
            setMobile("");
        })

    }

    return (
        <>

            <section class="about_section">
                <div class="heading_container">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h2><b> Registration </b> <span> <b> Here!!! </b> </span></h2>
                                <font style={{ "color": "blue" }} >{output}</font>
                                <br />
                                <form >
                                    <div class="form-group">
                                        <label for="name"><b>Name:</b></label>
                                        <input type="text" class="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><b>Email address:</b></label>
                                        <input type="text" class="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />

                                    </div>
                                    <div class="form-group">
                                        <label for="pwd"><b>Password:</b></label>
                                        <input type="password" class="form-control" id="pwd" value={password} onChange={e => setPassword(e.target.value)} />

                                    </div>
                                    <div class="form-group">
                                        <label for="mobile"><b>Mobile:</b></label>
                                        <input type="text" class="form-control" id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} />

                                    </div>

                                    <div class="form-group">
                                        <label for="address"><b>Address:</b></label>
                                        <textarea value={address} onChange={e => setAddress(e.target.value)} rows="5" class="form-control"></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label for="city"> <b>City:</b> </label>
                                        <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
                                            <option>Select City</option>
                                            <option>Indore</option>
                                            <option>Bhopal</option>
                                            <option>Ujjain</option>
                                        </select>
                                    </div>


                                    <div class="form-group">
                                        <label for="gender"> <b>Gender:</b> </label>
                                        &nbsp;&nbsp;
                                       <b>Male</b> <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} />
                                        &nbsp;&nbsp;
                                        <b>Female</b> <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
                                    </div>

                                    <button type="button" onClick={submitHandler} class="btn btn-primary"><b>Submit</b></button>


                                </form >
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Registration;