import React from "react";
import { NavLink} from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
return (
	
	<nav>
		

		<NavLink to="/" className="nav-link" >Home</NavLink>
		<NavLink to="/loging"  className="nav-link">
		Loging
		</NavLink>
		<NavLink to="/about" className="nav-link" >
			About
		</NavLink>
		<NavLink to="/blogs"  className="nav-link">
			Blogs
		</NavLink>
		
		
	</nav>
	
);
};

export default Navbar;
