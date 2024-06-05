import './Addshipment.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _shipmentapiurl, _categoryapiurl, _subcategoryapiurl } from '../../api.url';

function Addshipment() {

  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [description, setDescription] = useState();
  const [basecost, setBaseCost] = useState();
  const [output, setOutput] = useState();
  const [cList, setCategoryDetails] = useState([]);
  const [scList, setSubCategoryDetails] = useState([]);
  const [pickupcity, setPickupCity] = useState([]);
  const [dropcity, setDropCity] = useState([]);

  useEffect(() => {
    axios.get(_categoryapiurl + "fetch").then((response) => {
      setCategoryDetails(response.data);
    }).catch((err) => {
      console.log(err);
    });
  });

  const fetchSubCat = (c) => {
    setCatName(c);
    axios.get(_subcategoryapiurl + "fetch?catnm=" + c).then((response) => {
      setSubCategoryDetails(response.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    var formData = new FormData();
    formData.append('title', title);
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('description', description);
    formData.append('basecost', basecost);
    formData.append('caticon', file);
    formData.append('pickupcity', file);
    formData.append('dropcity', file);
    const config = {
      'content-type': 'multipart/form-data'
    };
    axios.post(_shipmentapiurl + "save", formData, config).then((response) => {
      setTitle("");
      setCatName("");
      setSubCatName("");
      setDescription("");
      setBaseCost("");
      setPickupCity("");
      setDropCity("");
      setOutput("Shipment Added Successfully....");
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
                <br />

                <h2><b>Add Shipment</b> <span> <b>Here!!!</b></span><br /></h2>
                <font style={{ "color": "blue" }} >{output}</font>
                <br/>
              <form>
                <div class="form-group">
                  <label for="title"><b>Title:</b></label>
                  <input type="text" class="form-control" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <br />
                <div class="form-group">
                  <label for="catnm"><b>Category Name:</b></label>
                  <select class="form-control" value={catName} onChange={e => fetchSubCat(e.target.value)} >
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
                  <select class="form-control" value={subCatName} onChange={e => setSubCatName(e.target.value)} >
                    <option>Select Sub Category</option>
                    {
                      scList.map((row) => (
                        <option>{row.subcatnm}</option>
                      ))
                    }
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label for="desc"><b>Description:</b></label>
                  <textarea class="form-control" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                </div>
                <br />
                <div class="form-group">
                  <label for="bs"><b>Base cost:</b></label>
                  <input type="text" class="form-control" value={basecost} onChange={e => setBaseCost(e.target.value)} />
                </div>
                <div class="form-group">
                  <label for="pickuploction"><b>Pickup Loction:</b></label>
                  <select class="form-control" value={pickupcity} onChange={e => setPickupCity(e.target.value)} >
                    <option>Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                    <option>Gujrat</option>
                    <option>Noida</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="droploction"><b>Drop Loction:</b></label>
                  <select class="form-control" value={dropcity} onChange={e => setDropCity(e.target.value)} >
                    <option>Select City</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Rajashthan</option>
                    <option>Jammu & Kashmir</option>
                    <option>Bombay</option>
                  </select>
                </div>
                <br />
               <div class="form-group">
                  <label for="file"><b>Shipment Icon:</b></label>
                  <input type="file" class="form-control" onChange={handleChange} />
                </div>
                <br />
                <button onClick={handleSubmit} type="button" class="btn btn-danger"><b>Add Shipment</b></button>
                <br /><br />
              </form>
             </div>
            </div>
          </div>
        </div>
      </section>

      {/* end about section */}

    </>
  );
}

export default Addshipment;

