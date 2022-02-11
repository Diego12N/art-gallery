const cartAmount = 4;

const CartWidget = (props) => {
	return (
		<a href="" className="navbar-cart">
			<i className="fas fa-shopping-cart"></i>
			<div className="navbar-cart__amount">
				<p>{props.valor}</p>
			</div>
		</a>
	);
};

export default CartWidget;
