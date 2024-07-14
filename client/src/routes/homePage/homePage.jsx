import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your<br />Perfect Home Easily</h1>
          <p>
            Discover a wide range of listings tailored for you.<br />
            Enjoy a hassle-free search experience with all the amenities you need.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>100+</h1>
              <h2>Happy Customers</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Room Available</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Property Sold</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <div className="value_orbe"></div>
        <div className="value_img">
          <img src="/home2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
