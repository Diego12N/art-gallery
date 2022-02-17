import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
	return (
		<div className="header_container">
			<header className="navbar">
				<Link to="/" className="navbar-logotipe">
					Mar Ponssa Art
				</Link>
				<ul className="navbar_container">
					<li className="navbar_item">
						<Link to="/" className="navbar_link">
							Home
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="" className="navbar_link">
							Biografia
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="/category/1" className="navbar_link">
							Sobre Carton
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="/category/2" className="navbar_link">
							Sobre Lienzo
						</Link>
					</li>
					<li className="navbar_item">
						<Link to="/category/3" className="navbar_link">
							Sobre Durlok
						</Link>
					</li>
				</ul>
				<CartWidget valor="4"></CartWidget>
			</header>
		</div>
	);
};

export default NavBar;
