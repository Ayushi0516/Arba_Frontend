import React,{useState} from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
    const [open, setOpen] = useState(false);

  const handleToggle = () => {
      console.log("clicked")
    setOpen(!open);
  };
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="navright">
        <div  className="slider-container">
          <div className="main" onClick={handleToggle}>
            <FaShoppingCart style={{ color: "skyblue", fontSize: "30px" }} />
          </div>
          {open && (
            <div className="box">
              <p>My Store</p>
              <p>Profile</p>
              <p>Logout</p>
            </div>
          )}
        </div>
        <div className="avatar"></div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="navright">
  <div>
    <FaShoppingCart style={{ color: "skyblue", fontSize:'30px'}} />
  </div>
  <div className="avatar"></div>
</div> */
}
