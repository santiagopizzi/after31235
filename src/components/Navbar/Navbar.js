import logo from "./logo.svg";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo"/>
        <h2>Tienda React</h2>
      </div>
      <div className="link-container"> 
        <ul>
          <a href="#" className="link">Componentes</a>
          <a href="#" className="link">Hooks</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
