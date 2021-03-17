import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>

      <p>This is the header</p>
    </div>
  );
}

export default Header;
