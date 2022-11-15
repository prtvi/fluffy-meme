import React from 'react';
import './Art.css';
import '../Portfolio.css';

import { assets } from '../../../App';

export default function Art(props) {
	const { isActive, toggleModal, updateImgToShow } = props;

	const showModal = function (e) {
		const { src, alt } = e.target;

		updateImgToShow(() => {
			return {
				src: src,
				alt: alt,
			};
		});

		toggleModal(curr => !curr);
	};

	return (
		<div className={`tab-content art ${isActive}`}>
			<ul>
				{assets.artPhotos.map(a => (
					<li className="list-item" key={a.src}>
						<img
							className="list-img"
							src={a.src}
							alt={a.alt}
							onClick={showModal}
						/>
						<p>{a.alt}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
