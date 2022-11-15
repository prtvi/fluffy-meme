import React from 'react';
import './Welcome.css';

import { assets } from '../../../App';

export default function Welcome() {
	return (
		<section className="welcome" id="welcome">
			<div className="brand-logo">
				<img src={assets.brandLogo} alt="brand-logo" />
			</div>

			<div className="separator"></div>

			<div className="welcome-header">
				<header>
					<h1>The Idyllic Palette</h1>
				</header>
			</div>

			<div className="subtitle">
				<p>Art | Design | Photography</p>
			</div>
		</section>
	);
}
