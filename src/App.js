import logo from './logo.svg';
import './App.css';
import Nav from './Components/NavComponent/Nav';
import Home from './Components/HomeComponent/Home';
import Service from './Components/ServicesComponent/Service';
import { Route, Routes } from 'react-router-dom';
import About from './Components/AboutComponent/About'
import Track from './Components/TrackComponent/Track';
import Contact from './Components/ContactComponent/Contact';
import Footer from './Components/FooterComponent/Footer';
import Registration from './Components/RegistrationComponent/Registration';
import Login from './Components/LoginComponent/Login';
import Userhome from './Components/UserhomeComponent/Userhome';
import Viewshipment from './Components/ViewshipmentComponent/Viewshipment';
import Adminhome from './Components/AdminhomeComponent/Adminhome';
import CPAdmin from './Components/CPAdminComponent/CPAdmin';
import CPUser from './Components/CPUserComponent/CPUser';
import EPAdmin from './Components/EPAdminComponent/EPAdmin';
import EPUser from './Components/EPUserComponent/EPUser';
import Logout from './Components/LogoutComponent/Logout';
import Manageusers from './Components/ManageusersComponent/Manageusers';
import Addcategory from './Components/AddcategoryComponent/Addcategory';
import Addsubcategory from './Components/AddsubcategoryComponent/Addsubcategory';
import Viewsubcategory from './Components/ViewsubcategoryComponent/Viewsubcategory';
import Addshipment from './Components/AddshipmentComponent/Addshipment';
import Auth from './AuthComponent/Auth';
import VSUser from './Components/VSUserComponent/VSUser';
import ViewBid from './Components/ViewBidComponent/ViewBid';
import Viewbidlist from './Components/ViewbidlistComponent/Viewbidlist';
import Verifyuser from './Components/VerifyuserComponent/Verifyuser';




 

function App() {
  return (
    <>
       <Nav/>
       <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/service" element={<Service/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/track" element={<Track/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/registration" element={<Registration/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/user" element={<Userhome/>}></Route> 
       <Route path="/viewshipment" element={<Viewshipment/>}></Route> 
       <Route path="/admin" element={<Adminhome/>}></Route> 
       <Route path="/cpadmin" element={<CPAdmin/>}></Route> 
       <Route path="/cpuser" element={<CPUser/>}></Route> 
       <Route path="/epadmin" element={<EPAdmin/>}></Route> 
       <Route path="/epuser" element={<EPUser/>}></Route> 
       <Route path="/logout" element={<Logout/>}></Route> 
       <Route path="/manageusers" element={<Manageusers/>}></Route> 
       <Route path="/addcategory" element={<Addcategory/>}></Route> 
       <Route path="/addsubcategory" element={<Addsubcategory/>}></Route>
       <Route path="/addshipment" element={<Addshipment/>}></Route>
       <Route path='/viewshipment' element={<Viewshipment />}></Route>
       <Route path='/viewsubcategory/:catnm' element={<Viewsubcategory/>}></Route>
       <Route path='/vsuser/:subcatnm' element={<VSUser/>}></Route>
       <Route path='/viewbid/:_id' element={<ViewBid />}></Route>
       <Route path="/auth" element={<Auth/>}></Route> 
       <Route path="/footer" element={<Footer/>}></Route> 
       <Route path="/viewbidlist" element={<Viewbidlist/>}></Route>
       <Route path='/verifyuser/:email' element={<Verifyuser />}></Route>
       </Routes>
       <Footer/>
    </>
);
}

export default App;




     
         

     






  


     



