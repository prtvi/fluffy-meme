import React from 'react';
import './Portfolio.css';

import Modal from './Modal/Modal';
import Tabs from './Tabs/Tabs';
import Art from './Art/Art';
import Photography from './Photography/Photography';
import Design from './Design/Design';
import Footer from '../Footer/Footer';

// tabs - art, photography & design

const checkIfActive = (curr, toCheck) => (curr === toCheck ? 'active' : '');

export default function Portfolio() {
	const [activeTab, updateActiveTab] = React.useState('art');

	const [modalOpen, toggleModal] = React.useState(false);
	const [imgToShow, updateImgToShow] = React.useState({});

	// close modal - on escape
	React.useEffect(() => {
		const closeModalKeydown = function (e) {
			if (e.key === 'Escape' && modalOpen) toggleModal(curr => !curr);
		};

		window.addEventListener('keydown', closeModalKeydown);

		return () => window.removeEventListener('keydown', closeModalKeydown);
	}, [modalOpen]);

	// close modal - on click
	React.useEffect(() => {
		const modal = document.querySelector('.modal');

		const closeModalOnClick = function (e) {
			if (e.target === modal && modalOpen) toggleModal(curr => !curr);
		};

		window.addEventListener('click', closeModalOnClick);

		return () => window.removeEventListener('click', closeModalOnClick);
	}, [modalOpen]);

	return (
		<>
			<Modal modalOpen={modalOpen} imgToShow={imgToShow} />

			<section className="portfolio" id="portfolio">
				<header>
					<h1>Portfolio</h1>
				</header>

				<Tabs
					activeTab={activeTab}
					updateActiveTab={updateActiveTab}
					checkIfActive={checkIfActive}
				/>

				<Art
					isActive={checkIfActive(activeTab, 'art')}
					toggleModal={toggleModal}
					updateImgToShow={updateImgToShow}
				/>

				<Design isActive={checkIfActive(activeTab, 'design')} />

				<Photography
					isActive={checkIfActive(activeTab, 'photography')}
					toggleModal={toggleModal}
					updateImgToShow={updateImgToShow}
				/>
			</section>

			<Footer />
		</>
	);
}
