import {useContext, useState} from "react";
import {CartContext} from "./CartContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {CSSTransition} from "react-transition-group";

import {Link} from "react-router-dom";

const CartItem = (props) => {
	const test = useContext(CartContext);
	const [hideItem, setHideItem] = useState(true);

	/* 	let totalItemPrice = props.item.qty * props.item.price; */

	return (
		<>
			{props.item && (
				<CSSTransition
					in={hideItem}
					timeout={300}
					unmountOnExit
					classNames="my-node"
				>
					<div className="cart-item">
						<div className="cart-item__content">
							<div className="cart-img__container">
								<img src={props.item.img} className="cart-item__img"></img>
							</div>
							<div className="cart-item__description">
								<Link to={`/item/${props.item.id}`} className="item-name">
									{props.item.name}
									<p className="item-measures">
										<b>Medidas:</b> {props.item.measures}
									</p>
								</Link>
								<b className="cart-item__price">$ {props.item.price}</b>
							</div>
						</div>
						<div className="item-buy">
							<div className="item-buy__detail">
								<b className="item-buy__quantitie">{props.item.qty}</b>
								<b className="item-buy__total bold">$ {props.item.total}</b>
								<button
									onClick={() => {
										setHideItem(false);
										console.log("Hideitem", hideItem);
										test.removeItem(props);
									}}
									className="cart-item__btn"
								>
									<div className="cart-btn__body">
										<FontAwesomeIcon icon={faXmark} />
									</div>
								</button>
							</div>
						</div>
					</div>
				</CSSTransition>
			)}
		</>
	);
};

export default CartItem;
