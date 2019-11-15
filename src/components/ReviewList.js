import React from 'react';
import { ReviewDetails } from './ReviewDetails';

function ReviewList(props) {
	const { reviews = [] } = props;
	return (
		<div>
			<ul>
				{reviews.map((review, index) => (
					<li key={index}>
						<ReviewDetails {...review} 
						onDeleteClick={props.onReviewDeleteClick}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export { ReviewList };