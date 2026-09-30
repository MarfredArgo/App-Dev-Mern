import { Link } from "react-router-dom";
 
function Navbar() {
  return (
    <nav className="bg-blue-100 px-6 py-4 flex gap-6">
      <Link to="/" className="font-medium hover:text-blue-600">
        Home
      </Link>
      <Link to="/students" className="font-medium hover:text-blue-600">
        Student Lists
      </Link>
      <Link to="/add-student" className="font-medium hover:text-blue-600">
        Add Students
      </Link>
    </nav>
  );
}
 
export default Navbar;