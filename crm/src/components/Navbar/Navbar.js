import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
			<>
				<Link to='/api/clients'>Clients</Link>
				<Link to='/api/users'>Users</Link>
				{/* <Link to='/api/users/:edit'>Users</Link> */}
				<Link to='/signin'>signIn</Link>
			</>
		);
}

export default NavBar;
