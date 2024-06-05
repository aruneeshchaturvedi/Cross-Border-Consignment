import './Viewsubcategory.css';
import { useState , useEffect } from 'react';
import { _userapiurl , _categoryapiurl , _subcategoryapiurl } from '../../api.url';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';

function Viewsubcategory() {
  
  const params = useParams();
  const [ scList , setSubCategoryDetails ] = useState([]);

  useEffect(()=>{
    axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
     setSubCategoryDetails(response.data);    
    }).catch((err)=>{
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
                <br/>
                <h2> <b> View SubCategory <span> &gt;&gt; {params.catnm} </span> </b> </h2>
                <br/>
              </div>
              <center>
              <div id="category_main" >
                {
                  scList.map((row)=>(
                    <Link to={`/vsuser/${row.subcatnm}`} >
                    <div class="category_part" >
                      <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150" />
                      <br/>
                      <b>{row.subcatnm}</b>
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
    <br/><br/>
  
    {/* end about section */}

</>
  );
}

export default Viewsubcategory;

