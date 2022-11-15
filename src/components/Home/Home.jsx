import React from 'react';

import Welcome from './Welcome/Welcome';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from '../Footer/Footer';

export default function Home() {
	return (
		<>
			<Welcome />
			<About />
			<Contact />
			<Footer />
		</>
	);
}
