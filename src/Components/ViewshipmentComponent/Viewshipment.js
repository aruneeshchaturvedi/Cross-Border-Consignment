import './Viewshipment.css';
import { useState, useEffect } from 'react';
import { _userapiurl, _categoryapiurl } from '../../api.url';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewshipment() {

  const [cList, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_categoryapiurl + "fetch").then((response) => {
      setCategoryDetails(response.data);
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
                  <h2><b>View Category <span> &gt;&gt;</span><br /></b></h2>
                  <br />
                </div>
                <center>
                  <div id="category_main" >
                    {

                      cList.map((row) => (
                        <Link to={`/viewsubcategory/${row.catnm}`} >
                          <div class="category_part" >
                            <img src={`../assets/uploads/caticons/${row.caticonnm}`} height="100" width="150" />
                            <br/>
                            <b>{row.catnm}</b>
                          </div>
                        </Link>

                      ))
                    }
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

export default Viewshipment;

