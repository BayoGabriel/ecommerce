import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Livingroom from "./Pages/Livingroom";
import Accessories from "./Pages/Accessories";
import Armchairsp from "./Pages/Armchairsp";
import Bathroom from "./Pages/Bathroom";
import Kitchen from "./Pages/Kitchen";
import Lighting from "./Pages/Lighting";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Pdetails from "./Pages/Pdetails";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Myacc from "./Pages/Myacc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/lroom" element={<Livingroom/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/armchairs" element={<Armchairsp/>}/>
        <Route path="/bathroom" element={<Bathroom/>}/>
        <Route path="/kitchen" element={<Kitchen/>}/>
        <Route path="/lighting" element={<Lighting/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/pdetails" element={<Pdetails/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/myacc" element={<Myacc/>}/>
      </Routes>
    </Router>
  );
}

export default App;
