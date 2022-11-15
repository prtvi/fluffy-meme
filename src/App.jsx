import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';

export const assets = {
	// welcome
	brandLogo: 'https://picsum.photos/200',

	// about
	aboutImg: 'https://picsum.photos/400/200',
	aboutMe:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

	// contacts
	contactDetails: {
		address: 'Shastrinagar, Belgaum, Karnataka, India - 590001',
		email: 'theidyllicpalette@gmail.com',
		instagram: 'theidyllicpalette',
		phone: '917204555555',
		phoneSeparated: '91 72045 55555',
	},

	contactIcons: {
		email: './assets/icons/mail.png',
		instagram: './assets/icons/instagram.png',
		phone: './assets/icons/phone.png',
	},

	// art
	artPhotos: [
		{
			src: 'https://picsum.photos/500/600',
			alt: 'Hot air baloons made by me 0',
		},
		{
			src: 'https://picsum.photos/200/350',
			alt: 'Hot air baloons made by me 1',
		},
		{
			src: 'https://picsum.photos/150/300',
			alt: 'Hot air baloons made by me 2',
		},
		{
			src: 'https://picsum.photos/500/700',
			alt: 'Hot air baloons made by me 3',
		},
	],

	// photography
	photography: [
		{
			src: 'https://picsum.photos/500/600',
			alt: 'WooshH made by me 0',
		},
		{
			src: 'https://picsum.photos/200/350',
			alt: 'WooshH made by me 1',
		},
		{
			src: 'https://picsum.photos/150/300',
			alt: 'WooshH made by me 2',
		},
		{
			src: 'https://picsum.photos/500/700',
			alt: 'WooshH made by me 3',
		},
	],

	// design
	designPhotos: [
		{
			id: 0,
			src: 'https://picsum.photos/640/300',
			alt: 'firecrackers inside water',
			title: 'Firecrackers outside water',
			caption: 'Got creative and downloaded this beautiful image',
			date: '2022-09-07',
		},
		{
			id: 1,
			src: 'https://picsum.photos/440/500',
			alt: 'firecrackers inside water',
			title: 'Firecrackers  water',
			caption: 'Got creative and downloaded this beautiful image',
			date: '2022-10-07',
		},
		{
			id: 2,
			src: 'https://picsum.photos/650/400',
			alt: 'firecrackers inside water',
			title: ' outside water',
			caption: 'Got creative and downloaded this beautiful image',
			date: '2022-04-07',
		},
		{
			id: 3,
			src: 'https://picsum.photos/340/300',
			alt: 'firecrackers inside water',
			title: 'Firecrackers outside water',
			caption: 'Got  and downloaded this beautiful image',
			date: '2022-09-07',
		},
		{
			id: 4,
			src: 'https://picsum.photos/440/500',
			alt: 'firecrackers inside water',
			title: 'Firecrackers outside water',
			caption: 'Got creative and  this beautiful image',
			date: '2022-08-07',
		},
	],
};

export default function App() {
	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navbar />}>
						<Route index element={<Home />} />
						<Route path="portfolio" element={<Portfolio />} />
						<Route path="*" element={<></>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</main>
	);
}
