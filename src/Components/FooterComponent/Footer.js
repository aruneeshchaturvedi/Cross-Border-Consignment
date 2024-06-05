function Footer() {
  return (
    <>
      {/* <!-- info section --> */}

<section class="info_section layout_padding2">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-3 info_col">
        <div class="info_contact">
          <h4>
            <b>Address</b>
          </h4>
          <div class="contact_link_box">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                <b>Location</b>
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                <b>Call +01 1234567890</b>
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                <b>cbc@gmail.com</b>
              </span>
            </a>
          </div>
        </div>
        <div class="info_social">
          <a href="">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info_col">
        <div class="info_detail">
          <h4>
            <b>Info</b>
          </h4>
          <p>
           <b> necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful </b>
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-2 mx-auto info_col">
        <div class="info_link_box">
          <h4>
           <b>Links</b>
          </h4>
          <div class="info_links">
            <a class="active" href="index.html">
              <img src="images/nav-bullet.png" alt=""/>
              <b>Home</b>
            </a>
            <a class="" href="about.html">
              <img src="images/nav-bullet.png" alt=""/>
              <b>About</b>
            </a>
            <a class="" href="service.html">
              <img src="images/nav-bullet.png" alt=""/>
              <b>Services</b>
            </a>
            <a class="" href="contact.html">
              <img src="images/nav-bullet.png" alt=""/>
              <b>Contact Us</b>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info_col ">
        <h4>
          <b>Subscribe</b>
        </h4>
        <form action="#">
          <input type="text" placeholder="Enter email" />
          <button type="submit">
            <b>Subscribe</b>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

{/* <!-- end info section --> */}


{/* <!-- footer section --> */}
<section class="footer_section">
        <div class="container">
          <p>
         <b> &copy; <span id="displayYear"></span> Thank you for visiting our website </b>
            <a href="https://html.design/"></a>
          </p>
        </div>
      </section>
      {/* <!-- footer section --> */}
      

     
    </>
  );
}




export default Footer;



