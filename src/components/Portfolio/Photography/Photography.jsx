import React from 'react';
import '../Art/Art.css';
import '../Portfolio.css';

import { assets } from '../../../App';

export default function Photography(props) {
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
		<div className={`tab-content photography ${isActive}`}>
			<ul>
				{assets.photography.map(a => (
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
