 import './Manageusers.css';
import { useState , useEffect } from 'react';
import { _userapiurl } from '../../api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';




function Manageusers() {
  

  const navigate = useNavigate();
  const [ userDetails , setUserDetails ] = useState([]);
 
  useEffect(()=>{
    axios.get(_userapiurl+"fetch?role=user").then((response)=>{
     setUserDetails(response.data);    
    }).catch((err)=>{
     console.log(err);
    });   
   });

  const changeStatus=(_id,status)=>{
    // alert(id+"-----"+status);
    if(status=="verify")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};      
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        navigate("/manageusers")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
    else if(status=="block")
    {
      let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};      
      axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
        navigate("/manageusers")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
    else
    {
      let deleteDetails={"data":{"_id":_id}};      
      axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
        navigate("/manageusers")  
      }).catch((error)=>{
        console.log(error);    
      });
    }
  } 

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
<h2><b>View & Manage Users</b> <span> <b>Details</b></span></h2>
</div>
<br/>
<CSVLink className='downloadbtn btn btn-primary' filename='my-file.csv' data={userDetails}><b>Export CSV</b></CSVLink>
<br/>




    
<center>              
<table class="table table-bordered" >

<tr>
<th><b>RegID</b></th>
<th><b>Name</b></th>
<th><b>Name</b></th>
<th><b>Email</b></th>
<th><b>Mobile</b></th>
<th><b>Address</b></th>
<th><b>City</b></th>
<th><b>Gender</b></th>
<th><b>Info</b></th>  
<th><b>Status</b></th>
<th><b>Action</b></th>
</tr>

{
  userDetails.map((row)=>(
    <tr>
      <td>{row._id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.mobile}</td>
      <td>{row.address}</td>
      <td>{row.city}</td>
      <td>{row.gender}</td>
      <td>{row.info}</td>
      <td>
      { row.status==1 && <font color="green"><b>Verified</b></font> }
      { row.status==0 && <font color="orange"><b>Not Verified</b></font> }  
      </td>
      <td>
      { row.status==1 && <font onClick={()=>{ changeStatus(row._id,'block') }} color="blue"><b>Change Status</b></font> }
      { row.status==0 && <font onClick={()=>{ changeStatus(row._id,'verify') }} color="blue"><b>Change Status</b></font> }
      <br/>
      <font onClick={()=>{ changeStatus(row._id,'delete') }} color="red"><b>Delete</b></font>
      </td>
    </tr>  
  ))
}

</table>              
</center>

            </div>
          </div>
        </div>
      </div>
    </section>
  
    {/* end about section */}

</>
  );
}

export default Manageusers;

