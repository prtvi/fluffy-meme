const toggleNavbar = function () {
	if (this.className === 'navbar') this.className += ' responsive';
	else this.className = 'navbar';
};

const navbar = document.querySelector('.navbar');
navbar.addEventListener('click', toggleNavbar);

// portfolio change tabs

const btnTabs = document.querySelectorAll('.btn-tab');
const tabs = document.querySelectorAll('.tab-content');

btnTabs.forEach(btn => {
	btn.addEventListener('click', function () {
		// remove active class from all tab btns
		btnTabs.forEach(bt => bt.classList.remove('active'));

		tabs.forEach(tab => {
			if (btn.dataset.btnTab === tab.dataset.tab) {
				// if matched then add active class to tab btn
				btn.classList.add('active');

				//  display tab
				tab.classList.add('active');

				window.scrollTo(0, 0);
			} else tab.classList.remove('active');
		});
	});
});

// adding functionality to design tab

const designPreviewImg = document.querySelector('.design-preview-img');
const hItemList = document.querySelector('.h-item-list');
const hItems = document.querySelectorAll('.h-item');

hItemList.addEventListener('click', function (e) {
	const clickedItem = e.target.closest('.h-item');
	if (!clickedItem) return;

	const itemId = clickedItem.getAttribute('id');
	const itemAlt = clickedItem.getAttribute('alt');

	// remove active class from all and add to clicked item
	hItems.forEach(i => i.classList.remove('active'));
	clickedItem.classList.add('active');

	// change src of preview image
	designPreviewImg.src = `./assets/designs/${itemId}.png`;

	// TODO
	designPreviewImg.alt = `./assets/designs/${itemId}.png`;
});
