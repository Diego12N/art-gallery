import Item from "./Item";
import "../style/galleryItem.css";
import "../style/loader.css";
import {
	ButtonLeft,
	ButtonRight,
	GalleryCarousel,
	GalleryContainer,
	IconArrowLeft,
	IconArrowRight,
	ItemContainer,
} from "./styleComponents/ItemListStyles";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useEffect} from "react";
import {hideButtons, moveLeft, moveRight} from "../utils/itemListFunctions";

const ItemList = (props) => {
	const [carouselPosition, setCarousel] = useState(0);
	const [buttonLeft, setLeft] = useState(false);
	const [buttonRight, setRight] = useState(false);

	let carouselPercentage = -100 * (props.products.length - 1);

	useEffect(() => {
		hideButtons(carouselPosition, carouselPercentage, setLeft, setRight);
	});

	return (
		<>
			<GalleryCarousel>
				<ButtonLeft
					leftState={buttonLeft}
					onClick={() => {
						moveLeft(carouselPosition, setCarousel);
					}}
				>
					<IconArrowLeft icon={faAngleLeft} />
				</ButtonLeft>
				<GalleryContainer carousel={carouselPosition}>
					{props.products.length > 0 ? (
						props.products.map((elem) => {
							return (
								<>
									<ItemContainer>
										<Item
											key={elem.id}
											id={elem.id}
											img={elem.img}
											title={elem.title}
											price={elem.price}
											stock={elem.stock}
										></Item>
									</ItemContainer>
								</>
							);
						})
					) : (
						<>
							<div className="lds-ring">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>
							<b>Cargando...</b>
						</>
					)}
				</GalleryContainer>
				<ButtonRight
					rightState={buttonRight}
					onClick={() => {
						moveRight(carouselPosition, carouselPercentage, setCarousel);
					}}
				>
					<IconArrowRight icon={faAngleRight} />
				</ButtonRight>
			</GalleryCarousel>
		</>
	);
};

export default ItemList;

/* const ItemList = (props) => {
	return (
		<>
			<div className="item-container">
				<IconArrowLeft icon={faCircleChevronLeft} />
				{props.products.length > 0 ? (
					props.products.map((elem) => {
						return (
							<>
								<Item
									key={elem.id}
									id={elem.id}
									img={elem.img}
									title={elem.title}
									price={elem.price}
									stock={elem.stock}
								></Item>
							</>
						);
					})
				) : (
					<>
						<div className="lds-ring">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
						<b>Cargando...</b>
					</>
				)}
				<IconArrowRight icon={faCircleChevronRight} />
			</div>
		</>
	);
};

export default ItemList; */
