import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	render() {
		return (
			<form action="" className="store-selector">
				{/* This is a comment */}
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
				<button type="submit">Visit Store ➔</button>
			</form>
		);
	}
}

export default StorePicker;