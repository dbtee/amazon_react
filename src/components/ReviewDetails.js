import React from 'react';
import { StarRating } from './StarRating';

function ReviewDetails(props) {

	return (
		<div className="ui list">
		<div className="ui segment">
			<p>
			<h3>Reviewer: {props.full_name}</h3>
            <p>Rated</p> <StarRating max={5} rating={props.rating} />
			<p>{props.body}</p>
			<br />
			<button
            className="ui right floated red small button"
            onClick={() => props.onDeleteClick(props.id)}
          >
            Delete
          </button>
		  <br />
		  <br />
		  </p>
			</div>
			</div>
	);
}
export { ReviewDetails };