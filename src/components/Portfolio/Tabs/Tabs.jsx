import React from 'react';
import './Tabs.css';

export default function Tabs(props) {
	const { activeTab, updateActiveTab, checkIfActive } = props;

	const tabChangeEL = e => updateActiveTab(e.target.textContent.toLowerCase());

	return (
		<div className="tabs">
			<button
				onClick={tabChangeEL}
				className={`btn-tab ${checkIfActive(activeTab, 'art')}`}
			>
				Art
			</button>{' '}
			|
			<button
				onClick={tabChangeEL}
				className={`btn-tab ${checkIfActive(activeTab, 'design')}`}
			>
				Design
			</button>{' '}
			|
			<button
				onClick={tabChangeEL}
				className={`btn-tab ${checkIfActive(activeTab, 'photography')}`}
			>
				Photography
			</button>
		</div>
	);
}
