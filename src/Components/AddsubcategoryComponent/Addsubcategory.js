import './Addsubcategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl } from '../../api.url';


function Addsubcategory() {

  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [output, setOutput] = useState();
  const [cList, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_categoryapiurl + "fetch").then((response) => {
      setCategoryDetails(response.data);
    }).catch((err) => {
      console.log(err);
    });
  });

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_subcategoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
    });
  }

  return (
    <>
      {/* about section */}

      <section class="about_section">
        <div class="heading_container">
          <div class="container  ">
            <div class="row">
              <div class="col-md-12">
                <div class="detail-box">

                  <br />
                  <h2><b>Add SubCategory</b> <span> <b>Here!!!</b></span><br /></h2>
                  <br />
                  <font style={{ "color": "blue" }} >{output}</font>
                  <form>
                    <div class="form-group">
                      <label for="catnm"><b>Category Name:</b></label>
                      <select class="form-control" value={catName} onChange={e => setCatName(e.target.value)}>
                        <option>Select Category</option>
                        {
                          cList.map((row) => (
                            <option>{row.catnm}</option>
                          ))
                        }
                      </select>
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="subcatnm"><b>SubCategory Name:</b></label>
                      <input type="text" class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="file"><b>SubCategory Icon:</b></label>
                      <input type="file" class="form-control" onChange={handleChange} />
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="button" class="btn btn-danger"><b>Add SubCategory</b></button>
                    <br /><br />
                  </form>
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

export default Addsubcategory;

