'use strict';

// modal
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const modalCaption = document.querySelector('.modal-caption');

// navbar
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const hamburgerLinkEl = document.querySelector('.nav-link.icon');
const navLinks = document.querySelectorAll('.nav-link');

// portfolio change tab
const btnTabs = document.querySelectorAll('.btn-tab');
const tabs = document.querySelectorAll('.tab-content');

// art and photography
const artItemList = document.querySelector('.art-item-list');
const photographyItemList = document.querySelector('.photography-item-list');

// portfolio - design - horizontal scroll feature
const designPreviewImg = document.querySelector('.design-preview-img');
const hItemList = document.querySelector('.h-item-list');
const hItems = document.querySelectorAll('.h-item');
const nDesigns = hItems.length;
const prevArrow = document.querySelector('.controls.prev');
const nextArrow = document.querySelector('.controls.next');

// functions

const hideImgModal = function (e) {
	if (e.target === modalImg) return;

	modalImg.classList.remove('zoom-in');
	modalCaption.classList.remove('zoom-in');

	modalImg.classList.add('zoom-out');
	modalCaption.classList.add('zoom-out');

	setTimeout(() => (modal.style.display = 'none'), 200);
};

const displayImgModal = function (imgEle, imgCaption) {
	modalImg.classList.remove('zoom-out');
	modalCaption.classList.remove('zoom-out');

	modalImg.src = imgEle.src;
	modalCaption.textContent = imgCaption;

	modalImg.classList.add('zoom-in');
	modalCaption.classList.add('zoom-in');

	modal.style.display = 'block';
};

const hideImgModalOnKeydown = function (e) {
	if (e.key === 'Escape' && modal.style.display === 'block') hideImgModal(e);
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
	const captionContainer = document.querySelector('.caption-container');
	const captionTitleEle = captionContainer.querySelector('.caption-title');
	const captionTextEle = captionContainer.querySelector('.caption-text');
	const captionDateEle = captionContainer.querySelector('.caption-date');

	const { captionTitle, captionText, captionDate } = clickedImg.dataset;

	// change src of preview image
	designPreviewImg.src = clickedImg.src;
	designPreviewImg.alt = clickedImg.alt;
	designPreviewImg.dataset.imgId = clickedImg.id;

	captionTitleEle.textContent = captionTitle;
	captionTextEle.textContent = captionText;
	captionDateEle.textContent = formatDate(captionDate);
};

const toggleNavbar = function () {
	navbar.classList.toggle('toggle');
	hamburger.classList.toggle('toggle');

	navLinks.forEach(n => {
		if (!n.classList.contains('icon')) n.classList.toggle('toggle');
	});
};

const addActiveClassAndLoadImg = function (element) {
	// remove active class from others except clicked item
	hItems.forEach(i => i.classList.remove('active'));

	const clickedItem = element.closest('.h-item');
	clickedItem.classList.add('active');

	clickedItem.scrollIntoView(false);

	loadImageForPreview(element);
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

const listEL = function (e) {
	if (!e.target.classList.contains('list-img')) return;

	const clickedImgDesc = e.target
		.closest('.list-item')
		.querySelector('p').textContent;

	displayImgModal(e.target, clickedImgDesc);
};

const hItemListEL = function (e) {
	if (!e.target.classList.contains('h-item-img')) return;

	addActiveClassAndLoadImg(e.target);
};

const nextAndPrevArrowEL = function (e) {
	const currImg = document.querySelector('.design-preview-img');
	const currNum = +currImg.dataset.imgId.slice(1);

	let num;
	if (e.target.classList.contains('prev')) {
		num = currNum - 1;
		if (num < 1) num = nDesigns;
	} else if (e.target.classList.contains('next')) {
		num = currNum + 1;
		if (num > nDesigns) num = 1;
	}

	const nextImgToLoad = document.getElementById(`d${num}`);
	addActiveClassAndLoadImg(nextImgToLoad);
};

// event listeners

// modal
modal && modal.addEventListener('click', hideImgModal);
window.addEventListener('keydown', hideImgModalOnKeydown);

// navbar
hamburgerLinkEl.addEventListener('click', toggleNavbar);

// portfolio change tabs
btnTabs.forEach(btn => btn.addEventListener('click', portfolioTabsEL));

// portfolio (art and photography)
artItemList && artItemList.addEventListener('click', listEL);
photographyItemList && photographyItemList.addEventListener('click', listEL);

// portfolio (design)
// horizontal scroll - view/load image on click
hItemList && hItemList.addEventListener('click', hItemListEL);

// arrows for browsing gallery
prevArrow && prevArrow.addEventListener('click', nextAndPrevArrowEL);
nextArrow && nextArrow.addEventListener('click', nextAndPrevArrowEL);
