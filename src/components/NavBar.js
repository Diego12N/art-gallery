import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import "../style/header.css";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {
	Header,
	IconBars,
	ImgLogotipe,
	ModalBack,
	NavbarAboutContainer,
	NavbarAboutItem,
	NavBarAboutLink,
	NavbarAboutList,
	NavbarContainer,
	NavbarItem,
	NavbarItemLink,
	NavbarList,
	NavbarLogotipe,
	Wrapped,
} from "./styleComponents/NavbarStyles";
import {useState, useEffect} from "react";
import {createBrowserHistory} from "history";

const NavBar = () => {
	const [showMenu, setMenu] = useState(false);

	const history = createBrowserHistory();

	useEffect(() => {
		// clear alert on location change

		const unlisten = history.listen(() => {
			setMenu(false);
		});

		// stop the listener when component unmounts
		return unlisten;

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{showMenu === true && <ModalBack onClick={() => setMenu(false)} />}
			<Header>
				<Wrapped>
					<NavbarContainer>
						<IconBars icon={faBars} onClick={() => setMenu(!showMenu)} />
						<NavbarLogotipe to="/" onClick={() => setMenu(false)}>
							<ImgLogotipe src="https://i.ibb.co/LpC9C1t/Mar-logotipe.jpg" />
						</NavbarLogotipe>
						<NavbarList open={showMenu}>
							<NavbarItem open={showMenu}>
								<NavbarItemLink to="/" onClick={() => setMenu(false)}>
									Home
								</NavbarItemLink>
							</NavbarItem>
							<NavbarItem open={showMenu}>
								<NavbarItemLink to="" onClick={() => setMenu(false)}>
									Biografia
								</NavbarItemLink>
							</NavbarItem>
							<NavbarItem open={showMenu}>
								<NavbarItemLink to="/contact" onClick={() => setMenu(false)}>
									Contacto
								</NavbarItemLink>
							</NavbarItem>
						</NavbarList>
						<Link to="/cart" onClick={() => setMenu(false)}>
							<CartWidget />
						</Link>
					</NavbarContainer>
				</Wrapped>
				<NavbarAboutContainer>
					<NavbarAboutList>
						<NavbarAboutItem>
							<NavBarAboutLink to="/category/1">Sobre Carton</NavBarAboutLink>
						</NavbarAboutItem>
						<NavbarAboutItem>
							<NavBarAboutLink to="/category/2">Sobre Lienzo</NavBarAboutLink>
						</NavbarAboutItem>
						<NavbarAboutItem>
							<NavBarAboutLink to="/category/3">Sobre Durlok</NavBarAboutLink>
						</NavbarAboutItem>
					</NavbarAboutList>
				</NavbarAboutContainer>
			</Header>
		</>
	);
};

export default NavBar;
