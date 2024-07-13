import { Link, useNavigate } from "react-router-dom";
import "./card.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function Card({ item }) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const canModify = currentUser && currentUser.id === item.userId;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        setIsLoading(true);
        await apiRequest.delete(`/posts/${item.id}`);
        navigate(0); // Refresh the page after deletion
      } catch (err) {
        console.error("Error deleting post:", err);
        setError("An error occurred while deleting the post.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">₹ {item.price}/- per month</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
            <div className="feature">
              <img src="/kitchen.png" alt="" />
              <span>{item.kitchen} kitchen</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
            {canModify && (
              <div className="icon" onClick={handleDelete}>
                <img src="/close.png" alt="Delete" />
                {isLoading ? "Deleting..." : ""}
              </div>
            )}
          </div>
          {error && <span className="error">{error}</span>}
        </div>
      </div>
    </div>
  );
}

export default Card;