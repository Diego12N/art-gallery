import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const GalleryCarousel = styled.div`
	width: 100%;
	position: relative;

	@media screen and (max-width: 480px) {
		overflow: hidden;
	}
`;

export const GalleryContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
	width: 60%;
	gap: 30px;

	@media screen and (max-width: 480px) {
		width: 100%;
		justify-content: unset;
		flex-wrap: nowrap;
		gap: 0;
		transition: all 1s ease-in-out;
		transform: translateX(${({carousel}) => `${carousel}%`});
`;

export const ItemContainer = styled.div`
	@media screen and (max-width: 480px) {
		display: flex;
		justify-content: center;
		min-width: 100%;
	}
`;

export const ButtonLeft = styled.button`
	display: none;

	@media screen and (max-width: 480px) {
		display: flex;
		border: none;
		background: transparent;
		top: calc(50% - 15px);
		left: 30px;
		position: absolute;
		z-index: 15;
		transition: all 0.3s ease-out;
		opacity: ${({leftState}) => (leftState ? "0" : "1")};
	}
`;

export const IconArrowLeft = styled(FontAwesomeIcon)`
	@media screen and (max-width: 480px) {
		color: red;
		font-size: 30px;
	}
`;

export const ButtonRight = styled.button`
	display: none;

	@media screen and (max-width: 480px) {
		display: flex;
		position: absolute;
		border: none;
		background: transparent;
		top: calc(50% - 15px);
		right: 30px;
		transition: all 0.3s ease-out;
		opacity: ${({rightState}) => (rightState ? "0" : "1")};
	}
`;

export const IconArrowRight = styled(FontAwesomeIcon)`
	@media screen and (max-width: 480px) {
		color: red;
		font-size: 30px;
	}
`;
