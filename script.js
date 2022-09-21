'use strict';

const navbar = document.querySelector('.navbar');
const hamburgerIcon = document.querySelector('.hamburger-icon');

const btnTabs = document.querySelectorAll('.btn-tab');
const tabs = document.querySelectorAll('.tab-content');

const designPreviewImg = document.querySelector('.design-preview-img');
const hItemList = document.querySelector('.h-item-list');
const hItems = document.querySelectorAll('.h-item');

const formatDate = function (dateStr) {
	const dateObj = new Date(dateStr);
	const date = dateObj.getDate();
	const month = dateObj.toLocaleString('default', { month: 'long' });
	const year = dateObj.getFullYear();

	return `${date} ${month}, ${year}`;
};

const loadImageForPreview = function (clickedItem) {
	// desc container elements
	const descContainer = document.querySelector('.desc-container');
	const descTitleEle = descContainer.querySelector('.desc-title');
	const descTextEle = descContainer.querySelector('.desc-text');
	const descDateEle = descContainer.querySelector('.desc-date');

	// fetch values from clicked element
	const itemId = clickedItem.getAttribute('id');
	const { alt, descTitle, descText, descDate } = clickedItem.dataset;

	// change src of preview image
	designPreviewImg.src = `./assets/designs/${itemId}.png`;
	designPreviewImg.alt = alt;

	descTitleEle.textContent = descTitle;
	descTextEle.textContent = descText;
	descDateEle.textContent = formatDate(descDate);
};

const toggleNavbar = function () {
	if (navbar.className === 'navbar') navbar.className += ' responsive';
	else navbar.className = 'navbar';
};

// ELs

const portfolioTabsEL = function () {
	// remove active class from all tab btns
	btnTabs.forEach(bt => bt.classList.remove('active'));

	tabs.forEach(tab => {
		if (this.dataset.btnTab === tab.dataset.tab) {
			// if matched then add active class to tab btn
			this.classList.add('active');

			//  display tab
			tab.classList.add('active');

			window.scrollTo(0, 0);
		} else tab.classList.remove('active');
	});
};

const loadImgEL = function (e) {
	const clickedItem = e.target.closest('.h-item');
	if (!clickedItem) return;

	// remove active class from all and add to clicked item
	hItems.forEach(i => i.classList.remove('active'));
	clickedItem.classList.add('active');

	loadImageForPreview(clickedItem);
};

// portfolio change tabs
btnTabs.forEach(btn => btn.addEventListener('click', portfolioTabsEL));

// adding functionality to design tab
hamburgerIcon.addEventListener('click', toggleNavbar);

// horizontal scroll - view/load image on click
hItemList && hItemList.addEventListener('click', loadImgEL);
