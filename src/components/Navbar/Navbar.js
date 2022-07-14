import CartWidget from "./CartWidget";
import logo from "./logo.svg";
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">        
          <img src={logo} alt="logo" className="logo"/>
          <h2>Tienda React</h2>        
      </Link>
      <div className="link-container"> 
        <ul>
          <NavLink to="/categoria/componente" className={({isActive})=>isActive? "link-activo" : "link"}>Componentes</NavLink>
          <NavLink to="/categoria/hook" className={({isActive})=>isActive? "link-activo" : "link"}>Hooks</NavLink>
          <CartWidget />
        </ul>
       
      </div>
    </nav>
  );
};

export default Navbar;
