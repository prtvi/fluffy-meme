import React from 'react';
import './Footer.css';

export default function Footer() {
	const currYear = new Date().getFullYear();

	return (
		<footer className="footer" id="footer">
			<p>© V Vernekar | {currYear}</p>
		</footer>
	);
}
