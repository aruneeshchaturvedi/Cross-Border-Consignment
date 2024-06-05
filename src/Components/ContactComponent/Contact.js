function Contect() {
  return (
    <>

      {/* <!-- contact section --> */}
      <section class="contact_section">

        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 col-md-5 offset-md-1">
              <div class="heading_container">
                <h2><b> Contact </b> <span> <b> Us </b> </span> </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-10 col-md-5 offset-md-1">
              <div class="form_container contact-form">
                <form>
                  <div>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone Number" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" class="message-box" placeholder="Message" />
                  </div>
                  <div class="btn_box">
                    <button>
                      <b>SEND </b>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="slider_bg_box" id="app">
              <img src="assets/images/404.jpg" alt="" />
            </div>
            <div class="col-lg-7 col-md-6 px-0">
              <div class="map_container">
                <div class="map">
                  <div id="googleMap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end contact section --> */}

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap" />


    </>
  )
}
export default Contect;