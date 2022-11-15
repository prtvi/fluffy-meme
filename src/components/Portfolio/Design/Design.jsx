import React from 'react';
import './Design.css';
import '../Portfolio.css';

import { assets } from '../../../App';

const formatDate = function (dateStr) {
	const dateObj = new Date(dateStr);
	const date = dateObj.getDate();
	const month = dateObj.toLocaleString('default', { month: 'long' });
	const year = dateObj.getFullYear();

	return `${date} ${month}, ${year}`;
};

export default function Design(props) {
	const { isActive } = props;

	const [currIdx, updateCurrIdx] = React.useState(0);
	const [currImg, updateCurrImg] = React.useState(assets.designPhotos[currIdx]);

	const designImgsLen = assets.designPhotos.length;

	const updateImgEL = function (e) {
		const idx = +e.target.id;
		updateCurrIdx(idx);

		updateCurrImg(assets.designPhotos[idx]);
	};

	const navigateImgs = function (e) {
		const clickedBtn = e.target;
		let updatedIdx = 0;

		if (clickedBtn.classList.contains('next')) {
			if (currIdx + 1 >= designImgsLen) updatedIdx = 0;
			else updatedIdx = currIdx + 1;
		} else if (clickedBtn.classList.contains('prev')) {
			if (currIdx - 1 < 0) updatedIdx = designImgsLen - 1;
			else updatedIdx = currIdx - 1;
		}

		updateCurrIdx(updatedIdx);
		updateCurrImg(assets.designPhotos[updatedIdx]);
	};

	return (
		<div className={`tab-content design ${isActive}`}>
			<div className="design-preview">
				<div className="design-preview-container">
					<div className="img-container">
						<img
							className="design-preview-img"
							src={currImg.src}
							alt={currImg.alt}
						/>
					</div>

					<div className="caption-container">
						<h4 className="caption-title">{currImg.title}</h4>
						<p className="caption-text">{currImg.caption}</p>
						<span className="caption-date">{formatDate(currImg.date)}</span>
					</div>
				</div>

				<button className="controls prev" onClick={navigateImgs}>
					{' '}
					&#10094;{' '}
				</button>
				<button className="controls next" onClick={navigateImgs}>
					{' '}
					&#10095;{' '}
				</button>
			</div>

			<div className="h-scroll">
				<ul className="h-item-list">
					{assets.designPhotos.map(d => (
						<li
							className={`h-item ${d === currImg ? 'active' : ''}`}
							key={d.id}
						>
							<img
								className="h-item-img"
								src={d.src}
								alt={d.alt}
								onClick={updateImgEL}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
