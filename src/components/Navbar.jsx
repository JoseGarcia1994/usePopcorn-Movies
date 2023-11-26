import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import NumResults from "./NumResults.jsx";

const Navbar = () => {

  return (
    <nav className="nav-bar">
      <Logo />
      <Search />      
      <NumResults />
    </nav>
  );
};

export default Navbar;