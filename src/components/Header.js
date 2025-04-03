import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
      <h2>Job Application Portal</h2>
      <div>
        <span>{user.name} ({user.email})</span>
        <Link to="/profile"><button>Profile</button></Link>
      </div>
    </header>
  );
};

export default Header;
