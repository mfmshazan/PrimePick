import { Link } from "react-router-dom";
import { FiShoppingBag, FiPlusCircle } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FiShoppingBag className="navbar-icon" />
          <span className="navbar-title">PrimePick</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">
            <FiShoppingBag />
            <span>Products</span>
          </Link>
          <Link to="/create" className="nav-link nav-link-primary">
            <FiPlusCircle />
            <span>Add Product</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;