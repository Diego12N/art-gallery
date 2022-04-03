import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import "../style/header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {
	Header,
	IconBars,
	ImgLogotipe,
	NavbarContainer,
	NavbarItem,
	NavbarItemLink,
	NavbarList,
	NavbarLogotipe,
	Wrapped,
} from "./styleComponents/NavbarStyles";
import {useState} from "react";

const NavBar = () => {
	const [showMenu, setMenu] = useState(false);

	return (
		<Header>
			<Wrapped>
				<NavbarContainer>
					<NavbarLogotipe to="/">
						<ImgLogotipe src="https://i.ibb.co/LpC9C1t/Mar-logotipe.jpg"></ImgLogotipe>
					</NavbarLogotipe>
					<IconBars icon={faBars} onClick={() => setMenu(!showMenu)} />
					<NavbarList open={showMenu}>
						<NavbarItem open={showMenu}>
							<NavbarItemLink to="/">Home</NavbarItemLink>
						</NavbarItem>
						<NavbarItem open={showMenu}>
							<NavbarItemLink to="">Biografia</NavbarItemLink>
						</NavbarItem>
						<NavbarItem open={showMenu}>
							<NavbarItemLink to="/contact">Contacto</NavbarItemLink>
						</NavbarItem>
					</NavbarList>
					<Link to="/cart">
						<CartWidget></CartWidget>
					</Link>
				</NavbarContainer>
			</Wrapped>
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
		</Header>
	);
};

export default NavBar;

/* const NavBar = () => {
	const widthDevice = window.innerWidth;

	return (
		<header className="header">
			<div className="header_container">
				<div className="navbar-container">
					<Link to="/" className="navbar-logotipe">
						<img
							src="https://i.ibb.co/LpC9C1t/Mar-logotipe.jpg"
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
							<Link to="/contact" className="navbar_link">
								Contacto
							</Link>
						</li>
					</ul>
					<Link to="/cart">
						<CartWidget></CartWidget>
					</Link>
				</div>
			</div>
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

export default NavBar; */
