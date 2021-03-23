import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1> e-commerce </h1>
			<div className="links">
				<Link to="/"> Home </Link>
				<Link to="/cart"> Cart </Link>
			</div>
		</nav>
	);
};

export default Navbar;
