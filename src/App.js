import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Menuone from "./routercomponents/Menuone";
import Menutwo from "./routercomponents/Menutwo";
import Menuthree from "./routercomponents/Menuthree";
import Menufour from "./routercomponents/Menufour";
import Diningout from "./components/diningout";
import Booking from "./components/booking";
import Ourservices from "./components/ourservices";
import Explorefoods from "./components/explorefoods";
import Deals from "./components/deals";
import Footer from "./components/footer";
import { FaMapMarkerAlt } from "react-icons/fa";
import MyImg from "./components/images/images";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container home">
        <img className="lettuce-img" src={MyImg.Lettuce} alt="" />
        <img className="plate-img" src={MyImg.Deliciousfood} alt="" />
        <div className="column1">
          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" exact component={<Menuone />} />
                <Route path="/menutwo" component={<Menutwo />} />
                <Route path="/menuthree" component={<Menuthree />} />
                <Route path="/menufour" component={<Menufour />} />
              </Routes>
            </div>
          </Router>

          <p className="food-text">Food</p>
          <p className="unique-food">
            Discover Restaurant <br></br>& Delicious Food
          </p>
          <div>
            <div className="input-group">
              <div
                className="form-outline"
                style={{ flex: "0 1 0%", position: "relative" }}
              >
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search restaurant, food"
                />
              </div>
              <button type="button" className="btn btn-primary">
                Go
              </button>
            </div>
          </div>
          <div style={{ marginTop: "9%" }}>
            <p className="indore">
              <FaMapMarkerAlt />
              <span style={{ marginLeft: "15px" }}>Indore</span>
            </p>
          </div>
        </div>
        <div className="column2">
          <div>
            <img className="user-img" src={MyImg.UserPic} alt="" />
            <span className="user-profile">User </span>
            <span>
              <img className="redcarrot-img" src={MyImg.RedCarrotDown} alt="" />
            </span>
          </div>
        </div>
      </div>
      <Diningout />
      <Booking />
      <Ourservices />
      <Explorefoods />
      <Deals />
      <Footer />
    </div>
  );
}

export default App;
