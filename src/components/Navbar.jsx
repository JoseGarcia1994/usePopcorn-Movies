import Logo from "./Logo.jsx";

const Navbar = ({children}) => {

  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

export default Navbar;