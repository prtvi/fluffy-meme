import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	const [navOpen, updateNavOpen] = React.useState(false);

	const isOpen = () => (navOpen ? 'open' : '');

	const toggleNavbar = e => {
		updateNavOpen(curr => !curr);

		const scrollToEleId = e.target.textContent.toLowerCase();

		if (scrollToEleId === 'about' || scrollToEleId === 'contact') {
			const elementToScrollTo = document.querySelector(`#${scrollToEleId}`);

			window.scrollTo({
				top: elementToScrollTo.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			<nav className={`navbar ${isOpen()}`}>
				<Link className={`nav-link ${isOpen()}`} onClick={toggleNavbar} to="/#">
					TIP Logo
				</Link>

				<Link
					className={`nav-link ${isOpen()}`}
					onClick={toggleNavbar}
					to="/#about"
				>
					About
				</Link>

				<Link
					className={`nav-link ${isOpen()}`}
					onClick={toggleNavbar}
					to="/portfolio"
				>
					Portfolio
				</Link>

				<Link
					className={`nav-link ${isOpen()}`}
					onClick={toggleNavbar}
					to="/#contact"
				>
					Contact
				</Link>

				<Link to="#" className="nav-link icon" onClick={toggleNavbar}>
					<div className="hamburger-cont">
						<div className={`hamburger ${isOpen()}`}>
							<div className="line1"></div>
							<div className="line2"></div>
							<div className="line3"></div>
						</div>
					</div>
				</Link>
			</nav>

			<Outlet />
		</>
	);
}
