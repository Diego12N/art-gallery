import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 100;

	@media screen and (max-width: 480px) {
		position: unset;
	}
`;

export const Wrapped = styled.div`
	width: 100%;
	background-color: #373737;

	@media screen and (max-width: 480px) {
		height: 95px;
		overflow-y: hidden;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;
	height: 95px;
	margin: auto;

	@media screen and (max-width: 480px) {
		width: 80%;
		height: max-content;
	}
`;

export const NavbarLogotipe = styled(Link)`
	display: inline-block;
	width: 62px;
	height: 62px;
	overflow: hidden;
	border-radius: 50%;
	border: 1px solid #fff;
	z-index: 45;

	@media screen and (max-width: 480px) {
		min-width: 65px;
		min-height: 65px;
		margin: 10px 0;
	}
`;

export const ImgLogotipe = styled.img`
	width: 100%;
`;

export const IconBars = styled(FontAwesomeIcon)`
	display: none;
	font-size: 25px;
	color: #fff;
	background-color: #373737;
	z-index: 45;

	@media screen and (max-width: 480px) {
		display: block;
	}
`;

export const NavbarList = styled.ul`
	display: flex;
	list-style: none;
	height: 25%;
	transition: all 0.5s ease-in-out;
	z-index: 30;

	@media screen and (max-width: 480px) {
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 95px;
		left: 0;
		width: 100%;
		height: ${({open}) => (open ? "155px" : "0px")};
		padding: ${({open}) => (open ? "10px 0" : "0")};
		background-color: #373737;
		color: #fff;
	}
`;

export const NavbarItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 15px;
	width: 95px;
	height: 100%;
	cursor: pointer;
	background: transparent;
	color: white;
	transition: all 0.9s;

	@media screen and (min-width: 960px) {
		position: relative;
		z-index: 1;
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 3px;
			height: 100%;
			background-color: #fa1303;
			z-index: -1;
			transition: all 0.5s;
		}

		&:hover::before {
			width: 100%;
		}
	}

	@media screen and (max-width: 480px) {
		opacity: ${({open}) => (open ? "1" : "0")};
		margin-bottom: 30px;
	}
`;

export const NavbarItemLink = styled(Link)`
	font-size: 14px;
	letter-spacing: 0.5px;
	text-decoration: none;
	color: #fff;
`;

export const CartContainer = styled.div`
	display: flex;
	width: 65px;
	justify-content: flex-end;
	text-decoration: none;

	@media screen and (max-width: 480px) {
		justify-content: center;
	}
`;

export const CartIcon = styled(FontAwesomeIcon)`
	color: #fff;
	z-index: 45;
`;

export const CartCount = styled.div`
	text-align: center;
	background-color: brown;
	color: #fff;
	font-size: 10px;
	border-radius: 50%;
	width: 15px;
	height: 15px;
	z-index: 45;
`;
