import './Viewbidlist.css';
import { useEffect, useState } from 'react';
import { _userapiurl, _categoryapiurl, _shipmentapiurl, _bidapiurl } from '../../api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';





function Viewbidlist() {

  const navigate = useNavigate();
  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_bidapiurl + "fetch").then((response) => {
      setCategoryDetails(response.data);
    }).catch((error) => {
      console.log(error);
    })
  })


  return (<>
    {/* about section */}

    <section class="about_section">
      <div class="container  ">
        <div class="row">
          <div class="col-md-12">
            <div class="detail-box">
              <div class="heading_container">
                <br/>
                <h2><b>Browse All BIDS<span>&gt;&gt;</span></b></h2><br/>
              </div>

              <center>
                <table border="2px" width="1200px">

                  <tr style={{ "textAlign": "center" }}>
                    <th><b>ID</b></th>
                    <th><b>Product Id</b></th>
                    <th><b>User Id</b></th>
                    <th><b>Bid Cost</b></th>
                  </tr>
                  {
                    cDetails.map((row) => (
                      <tr style={{ "textAlign": "center" }}>
                        <td>{row._id}</td>
                        <td>{row.pid}</td>
                        <td>{row.uid}</td>
                        <td>{row.bidcost}</td>
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
    <br/><br/>

    {/* end about section */}


  </>
  );
}

export default Viewbidlist;