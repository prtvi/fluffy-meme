'use strict';

// navbar
const navbar = document.querySelector('.navbar');
const hamburgerIcon = document.querySelector('.hamburger-icon');

// tabs on portfolio page
const btnTabs = document.querySelectorAll('.btn-tab');
const tabs = document.querySelectorAll('.tab-content');

// horizontal scroll feature
const designPreviewImg = document.querySelector('.design-preview-img');
const hItemList = document.querySelector('.h-item-list');
const hItems = document.querySelectorAll('.h-item');

// modal
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalCaption = document.querySelector('.modal-caption');
const modalClose = document.querySelector('.modal-close');

// art and photography photos
const artItemList = document.querySelector('.art-item-list');
const photographyItemList = document.querySelector('.photography-item-list');

// functions

const hideModal = () => (modal.style.display = 'none');

const displayModal = function (imgSrc, imgCaption) {
	modal.style.display = 'block';
	modalImg.src = imgSrc;
	modalCaption.textContent = imgCaption;
};

const hideModalOnKeydown = function (e) {
	if (e.key === 'Escape' && modal.style.display === 'block') hideModal();
};

const formatDate = function (dateStr) {
	const dateObj = new Date(dateStr);
	const date = dateObj.getDate();
	const month = dateObj.toLocaleString('default', { month: 'long' });
	const year = dateObj.getFullYear();

	return `${date} ${month}, ${year}`;
};

const loadImageForPreview = function (clickedImg) {
	// desc container elements
	const descContainer = document.querySelector('.desc-container');
	const descTitleEle = descContainer.querySelector('.desc-title');
	const descTextEle = descContainer.querySelector('.desc-text');
	const descDateEle = descContainer.querySelector('.desc-date');

	// fetch values from clicked element
	const imgId = clickedImg.getAttribute('id');
	const imgAlt = clickedImg.getAttribute('alt');

	const { descTitle, descText, descDate } = clickedImg.dataset;

	// change src of preview image
	designPreviewImg.src = `./assets/designs/${imgId}.png`;
	designPreviewImg.alt = imgAlt;

	descTitleEle.textContent = descTitle;
	descTextEle.textContent = descText;
	descDateEle.textContent = formatDate(descDate);
};

const toggleNavbar = function () {
	if (navbar.className === 'navbar') navbar.className += ' responsive';
	else navbar.className = 'navbar';
};

// event listener functions

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
	if (!e.target.classList.contains('h-item-img')) return;

	const clickedItem = e.target.closest('.h-item');

	// remove active class from all and add to clicked item
	hItems.forEach(i => i.classList.remove('active'));
	clickedItem.classList.add('active');

	loadImageForPreview(e.target);
};

const listEL = function (e) {
	if (!e.target.classList.contains('list-img')) return;

	const clickedImg = e.target;
	const clickedImgDesc = clickedImg
		.closest('.list-item')
		.querySelector('p').textContent;

	displayModal(e.target.src, clickedImgDesc);
};

// event listeners

// modal
modal.addEventListener('click', hideModal);
modalClose.addEventListener('click', hideModal);
window.addEventListener('keydown', hideModalOnKeydown);

// portfolio change tabs
btnTabs.forEach(btn => btn.addEventListener('click', portfolioTabsEL));

// adding functionality to design tab
hamburgerIcon.addEventListener('click', toggleNavbar);

// horizontal scroll - view/load image on click
hItemList && hItemList.addEventListener('click', loadImgEL);

// portfolio photos (art and photography)
artItemList.addEventListener('click', listEL);
photographyItemList.addEventListener('click', listEL);
