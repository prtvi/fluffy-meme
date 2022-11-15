import React from 'react';
import './Contact.css';

import { assets } from '../../../App';

export default function Contact() {
	return (
		<section className="contact" id="contact">
			<header>
				<h2>Contact</h2>
			</header>

			<div className="address">
				<h3>The Idyllic Palette</h3>
				<p>{assets.contactDetails.address}</p>
			</div>

			<div className="social-icons">
				<div className="social-icon">
					<a href={`mailto:${assets.contactDetails.email}`}>
						<img src={assets.contactIcons.email} alt="mail icon" />{' '}
						<p>{assets.contactDetails.email}</p>
					</a>
				</div>

				<div className="social-icon">
					<a
						href={`https://www.instagram.com/${assets.contactDetails.instagram}`}
					>
						<img src={assets.contactIcons.instagram} alt="instagram icon" />{' '}
						<p>@{assets.contactDetails.instagram}</p>
					</a>
				</div>

				<div className="social-icon">
					<a href={`tel:+${assets.contactDetails.phone}`}>
						<img src={assets.contactIcons.phone} alt="phone icon" />{' '}
						<p>+{assets.contactDetails.phoneSeparated}</p>
					</a>
				</div>
			</div>
		</section>
	);
}
