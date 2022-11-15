import React from 'react';
import './About.css';

import { assets } from '../../../App';

export default function About() {
	return (
		<section className="about" id="about">
			<div className="about-img">
				<img src={assets.aboutImg} alt="about" />
			</div>

			<div className="about-content">
				<div className="about-content-data">
					<h2>About me</h2>
					<p>{assets.aboutMe}</p>
				</div>
			</div>
		</section>
	);
}
