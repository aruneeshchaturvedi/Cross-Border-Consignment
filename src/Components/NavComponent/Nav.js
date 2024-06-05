import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Nav() {



  const [nav, setNav] = useState();

  useEffect(() => {
    if (localStorage.getItem("role") === "admin") {
      setNav(<>
        {/* <!-- header section strats --> */}
        <header class="header_section">
          <div class="nav_top">
            <div class="container-fluid header_top_container">
              <div class="lang_box dropdown">
                {/* <span >
                 <b> Welcome Admin : {localStorage.getItem("email")} </b>
                </span> */}
              </div>
              <div class="social_box">


              </div>
              <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="index.html">
                  <span>
                    <img src="assets/images/logo.jpg" alt="" height={80} />

                   <b> Cross Border Consignment </b>
                    
                  </span>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
                      <Link><a class="nav-link"><b> Admin Home </b> <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/addcategory"> <a class="nav-link"><b> Add Category </b> </a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/addsubcategory"> <a class="nav-link"> <b> Add SubCategory </b> </a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/addshipment"> <a class="nav-link"> <b> Add Shipment </b> </a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/manageusers"> <a class="nav-link" href="service.html"><b> Manageusers </b> </a></Link>
                    </li>
                    <div class="nav-item dropdown">
                      <div class="nav-link dropdown-toggle" data-toggle="dropdown"> <b>setting</b>
                      </div>
                      <div class="dropdown-menu fade-up m-0">
                        <a class="dropdown-item"><Link to="/cpadmin"> <b> Change Password </b> </Link></a>
                        <a class="dropdown-item"><Link to="/epadmin"> <b> Edit Profile </b> </Link></a>
                      </div>
                    </div>
                    <li class="nav-item">
                      <Link to="/logout"> <a class="nav-link" href="service.html"> <b> Logout </b> </a></Link>
                    </li>

                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- end header section --> */}
      </>)
    } else if (localStorage.getItem("role") === "user") {
      setNav(<>
        {/* <!-- header section strats --> */}
        <header class="header_section">


          <div class="header_bottom">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="index.html">
                  <span>
                    <img src="assets/images/logo.jpg" alt="" height={80} />

                    <b> Cross Border Consignment </b>
                  </span>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class=""> </span>
                </button>

                

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav  ">
          
                    <li class="nav-item active">
                      <Link to="/"><a class="nav-link" > <b> User Home </b> <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="viewshipment"><a class="nav-link" > <b> View Shipment </b> <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/track"> <a class="nav-link" href="contact.html"> <b>Track Shipment </b></a></Link>
                    </li>

                    <li class="nav-item">
                      <Link to="change password"><a class="nav-link" > <b> Change Password </b> <span class="sr-only">(current)</span></a></Link>
                    </li>

                    <li class="nav-item">
                      <Link to="edit profile"><a class="nav-link" > <b> Edit Profile </b> <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/logout"> <a class="nav-link" > <b> Logout </b> </a></Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- end header section --> */}
      </>)
    } else {
      setNav(<>
        {/* <!-- header section strats --> */}
        <header class="header_section">
          <div class="header_top">
            <div class="container-fluid ">
              <div class="contact_nav">
                <a href="">
                  <span>
                    <b> Welcome Cross Border Consignment </b> {localStorage.getItem("email")}
                  </span>
                </a>

                <a href="">
                  <span>

                  </span>
                </a>

                <a href="">
                  <span>

                  </span>
                </a>

              </div>
            </div>
          </div>
          <div class="header_bottom">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg custom_nav-container ">
                <a class="navbar-brand" href="index.html">
                  <span>
                    <img src="assets/images/logo.jpg" alt="" height={80} />

                    <b> Cross Border Consignment </b>
                  </span>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class=""> </span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
                      <Link to="/"><a class="nav-link" href="index.html"> <b> Home </b> <span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/service"> <a class="nav-link" href="service.html"> <b> Services </b> </a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/about"> <a class="nav-link" href="about.html"> <b> About </b> </a> </Link>
                    </li>

                    <li class="nav-item">
                      <Link to="/contact"> <a class="nav-link" href="contact.html"> <b> Contact Us </b> </a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/registration"> <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> <b> Registration </b> </a></Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/login"> <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> <b> Login </b> </a></Link>
                    </li>
                    <form class="form-inline">
                      <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* <!-- end header section --> */}
      </>)
    }
  })






  return (
    <>
      {nav}
    </>
  )
}
export default Nav;






