import './Addcategory.css';
import { useState } from 'react';
import axios from 'axios';
import { _categoryapiurl } from '../../api.url';

function Addcategory() {

  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('caticon', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_categoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
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
                  <h2><b>Add Category </b><span><b>Here!!!</b></span><br /></h2>
                  <font style={{ "color": "blue" }} >{output}</font>
                  <form>
                    <div class="form-group">
                      <label for="catnm"><b>Category Name:</b></label>
                      <input type="text" class="form-control" value={catName} onChange={e => setCatName(e.target.value)} />
                    </div>
                    <br />
                    <div class="form-group">
                      <label for="file"><b>Category Icon:</b></label>
                      <input type="file" class="form-control" onChange={handleChange} />
                    </div>
                    <br />
                    <button onClick={handleSubmit} type="button" class="btn btn-danger"><b> Add Category </b></button>
                    <br /><br />
                  </form>
                </div>

                <div class="col-md-6 ">
                  <div class="img-box">
                    {/* <img src="assets/images/admin.jpg" alt="" /> */}
                  </div>
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

export default Addcategory;

