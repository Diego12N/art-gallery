import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import "../style/header.css";

const NavBar = () => {
	return (
		<header className="header">
			<div className="header_container">
				<div className="navbar-container">
					<Link to="/" className="navbar-logotipe">
						<img
							src="./images/Mar-logotipe.jpg"
							className="navbar-logotipe__img"
						></img>
					</Link>
					<ul className="navbar-list_container">
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
							<Link to="" className="navbar_link">
								Contacto
							</Link>
						</li>
					</ul>
					<Link to="/cart">
						<CartWidget></CartWidget>
					</Link>
				</div>
			</div>
			{/* <div className="header-margin__bottom"></div> */}
			<div className="navbar-sections__container">
				<ul className="navbar-sections">
					<li className="section">
						<Link to="/category/1" className="section_link">
							Sobre Carton
						</Link>
					</li>
					<li className="section">
						<Link to="/category/2" className="section_link">
							Sobre Lienzo
						</Link>
					</li>
					<li className="section">
						<Link to="/category/3" className="section_link">
							Sobre Durlok
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default NavBar;
