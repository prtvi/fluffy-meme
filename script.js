const toggleNavbar = function () {
	if (this.className === 'navbar') this.className += ' responsive';
	else this.className = 'navbar';
};

const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', toggleNavbar);
