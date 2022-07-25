import React from 'react';
import '@styles/ShoppingCartItem.scss';

const cartImageURL = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

const ShoppingCartItem = () => {
	return (
		<div className="ShoppingCartItem">
			<figure>
				<img src={cartImageURL} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
		</div>
	);
}

export default ShoppingCartItem;
