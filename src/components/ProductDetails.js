import React from 'react';

function ProductDetails(props) {
	return (
		<div className="ProductDetails">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
			<p>Price: ${props.price}</p>
			<p>Created at: {props.created_at}</p>
			<p>Seller: {props.full_name}</p>
		</div>
	);
}

export default ProductDetails;