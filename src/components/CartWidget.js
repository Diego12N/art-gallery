const cartAmount = 4;

const CartWidget = () => {
	return (
		<a href="" className="navbar-cart">
			<i className="fas fa-shopping-cart"></i>
			<div className="navbar-cart__amount">
				<p>{cartAmount}</p>
			</div>
		</a>
	);
};

export default CartWidget;
