import './VSUser.css';
import { useState, useEffect } from 'react';
import { _userapiurl, _categoryapiurl, _subcategoryapiurl, _shipmentapiurl } from '../../api.url';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function VSUser() {

  const params = useParams();
  const [sList, setShipmentDetails] = useState([]);

  useEffect(() => {
    axios.get(_shipmentapiurl + "fetch?subcatnm=" + params.subcatnm).then((response) => {
      setShipmentDetails(response.data);
    }).catch((err) => {
      console.log(err);
    });
  });


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
                  <h2> <b> View Shipment <span> &gt;&gt; {params.subcatnm} </span> </b> </h2>
                  <br />
                </div>
                <center>
                  {
                    sList.map((row) => (
                      <>
                        <table border="2px" height="150px" width="600px">
                          <tr>
                            <td width="35%" rowspan="3">
                              <center>
                                <img src={`../assets/uploads/shipmenticons/${row.shipmenticonnm}`} height="100" width="150" />
                              </center>
                            </td>
                            <td><b>Title : {row.title}</b></td>
                          </tr>
                          <tr>
                            <td><b>Description : {row.description}</b></td>
                          </tr>
                          <tr>
                            <td>
                              <b>Price : {row.basecost}</b>
                              <br />
                              <Link to={`/viewbid/${row._id}`}> <b>View Bid</b></Link>
                            </td>
                          </tr>
                        </table>
                        <br /><br />
                      </>
                    ))
                  }


                  <div id="category_main" >
                    {/*

                  scList.map((row)=>(
                    <Link to={`/vsuser/${row.subcatnm}`} >
                    <div class="category_part" >
                      <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150" />
                      <br/>
                      <b>{row.subcatnm}</b>
                    </div>
                    </Link>    
                  ))
                  */}
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br />

      {/* end about section */}

    </>
  );
}

export default VSUser;

