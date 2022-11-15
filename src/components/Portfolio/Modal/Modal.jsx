import React from 'react';
import './Modal.css';

export default function Modal(props) {
	const { modalOpen, imgToShow } = props;

	const showModal = modalOpen ? 'zoom-in' : 'zoom-out';
	const displayBlock = modalOpen ? 'show-modal' : '';

	return (
		<div className={`modal ${displayBlock}`}>
			<span className="modal-close">&times;</span>
			<img
				className={`modal-img ${showModal}`}
				src={imgToShow.src}
				alt={imgToShow.alt}
			/>
			<div className={`modal-caption ${showModal}`}>{imgToShow.alt}</div>
		</div>
	);
}
