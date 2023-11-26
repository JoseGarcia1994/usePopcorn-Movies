import Search from "./Search.jsx";
import Logo from "./Logo.jsx";
import NumResults from "./NumResults.jsx";

const Navbar = ({movies}) => {

  return (
    <nav className="nav-bar">
      <Logo />
      <Search />      
      <NumResults movies={movies}/>
    </nav>
  );
};

export default Navbar;