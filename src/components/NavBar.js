import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<div className="header_container">
			<header className="navbar">
				<a href="" className="navbar-logotipe">
					Mar Ponssa Art
				</a>
				<ul className="navbar_container">
					<li className="navbar_item">
						<a href="" className="navbar_link">
							Home
						</a>
					</li>
					<li className="navbar_item">
						<a href="" className="navbar_link">
							Biografia
						</a>
					</li>
					<li className="navbar_item">
						<a href="" className="navbar_link">
							Obras disponibles
						</a>
					</li>
				</ul>
				<CartWidget valor="4"></CartWidget>
			</header>
		</div>
	);
};

export default NavBar;
