import "../style/cartForm.css";

export const CartForm = () => {
	return (
		<div className="cart-form">
			<form className="cart-form__container">
				<div className="cart-form__section">
					<label htmlFor="name" className="cart-form__label">
						Nombre y apellido <span className="required">*</span>
					</label>
					<input type="text" name="name" className="cart-form__input"></input>
				</div>
				<div className="cart-form__section">
					<label htmlFor="email" className="cart-form__label">
						E-Mail <span className="required">*</span>
					</label>
					<input type="email" name="email" className="cart-form__input"></input>
				</div>
				<div className="cart-form__section">
					<label htmlFor="number" className="cart-form__label">
						Telefono <span className="required">*</span>
					</label>
					<input type="text" name="number" className="cart-form__input"></input>
				</div>
			</form>
		</div>
	);
};
