
// Swipe mobile 425px 

const mobileSwipe = () => {
	const swipeDown = document.getElementById("swipeBlock");
	const container = document.querySelector('.block-street')

	let startY;
	let isSwiping = false;
	let isReset = false;

	swipeDown.addEventListener("touchstart", function (event) {
		startY = event.touches[0].clientY;
		isSwiping = true;
	});


	container.addEventListener("touchmove", function (event) {
		if (!isSwiping) return;

		const endY = event.changedTouches[0].clientY;
		const deltaY = endY - startY;
		const detail = document.querySelector('.street__block-detail');
		if (deltaY > 0) {
			// Внизовй свайп - удаление элементов
			const hideElements = Array.from(container.getElementsByClassName("hide-element"));
			const disable = document.querySelectorAll('.disable');
			
			container.style.transform = 'translate(0px, 450px)';
			hideElements.forEach(item => {
				item.classList.add('hiden')
			});

			disable.forEach(item => {
				item.classList.remove('disable')
			});

			detail.style.flexDirection = "row";
			detail.style.justifyContent = "flex-start";

		} else {
			// Верхний свайп - возвращение элементов на место
			const removedElements = Array.from(container.getElementsByClassName("hide-element"));

			const blockOne = document.querySelector(".item1");
			const blockTwo = document.querySelector(".item2");

			container.style.transform = 'translate(0px, 0px)';

			removedElements.forEach(item => {
				item.classList.remove('hiden');
			});

			blockOne.classList.add("active");
			blockTwo.style.display = "none";
			detail.style.flexDirection = "column";
		}

		isSwiping = false;


		window.addEventListener("resize", function() {
			if(window.innerWidth >= 768){
				resetElements();
			}
		});

		function resetElements() {
			if(!isReset) {
				container.style.transform = 'translate(0px, 0px)';
				isReset = true;
			} 
		}


	});
}


mobileSwipe()


// test

// const blocks = document.getElementsByClassName("block-street");
//     const swipeThreshold = 100; // Пороговое значение свайпа

//     let startY;
//     let currentY;
//     let isSwiping = false;

//     Array.from(blocks).forEach(function(block) {
//       block.addEventListener("touchstart", function(event) {
//         startY = event.touches[0].clientY;
//         currentY = startY;
//         isSwiping = true;
//       });

//       block.addEventListener("touchmove", function(event) {
//         if (!isSwiping) return;
        
//         currentY = event.touches[0].clientY;
//         const deltaY = currentY - startY;

//         block.style.transform = translateY(deltaY + "px");
//       });

//       block.addEventListener("touchend", function(event) {
//         if (!isSwiping) return;

//         const deltaY = currentY - startY;

//         if (deltaY > swipeThreshold) {
//           block.classList.add("hide");
//         } else {
//           block.classList.remove("hide");
//         }

//         block.style.transform = "";
//         isSwiping = false;
//       });
// });

































// Viewer image
function viewerImage() {
	const images = document.querySelectorAll('.street__block-image img');
	const imageViewer = document.getElementById('imageViewer');

	images.forEach((image) => {
		image.addEventListener('click', () => {
			imageViewer.innerHTML = '';

			const fullImage = document.createElement('img');
			fullImage.src = image.src;
			fullImage.alt = image.alt;

			imageViewer.appendChild(fullImage);
			imageViewer.classList.add('show');
		});
	});

	imageViewer.addEventListener('click', (e) => {
		if (e.target === imageViewer) {
			imageViewer.innerHTML = '';
			imageViewer.classList.remove('show');
		}
	});
}

viewerImage();



function clickTabs() {


	const tabOne = document.querySelector(".zone_btn--info");
	const tabTwo = document.querySelector(".zone_btn--review");

	const blockOne = document.querySelector(".item1");
	const blockTwo = document.querySelector(".item2");

	const blockDetail = document.querySelector('.street__block-detail');
	const blockButton = document.querySelector(".street__button");
	const navigationItem = document.querySelector('.street__block-navigation')


	tabOne.classList.add("active");
	blockOne.classList.add("active");
	blockTwo.style.display = "none"
	tabOne.addEventListener("click", () => {
		tabOne.classList.add("active");
		blockOne.style.display = "block";
		blockTwo.style.display = "none";
		blockDetail.classList.remove("disable");
		blockButton.classList.remove("disable");
		navigationItem.classList.remove("disable");
		tabTwo.classList.remove("active");
	});
	tabTwo.addEventListener("click", () => {
		tabTwo.classList.add("active");
		blockTwo.style.display = "block";
		blockOne.style.display = "none";
		blockDetail.classList.add("disable");
		blockButton.classList.add("disable");
		navigationItem.classList.add("disable");
		tabOne.classList.remove("active");
	});

}

clickTabs()


// Swiper slider
const swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


function swiperSlider() {
	const button = document.querySelector('.link')
	const sliderViewer = document.getElementById('sliderViewer');
	const swiper = document.querySelector('.swiper-container');
	const swiperButton = document.querySelector('.swiper-close');

	button.addEventListener('click', () => {
		button.classList.toggle('active');
		sliderViewer.classList.add('slider-show');
		swiper.classList.add('slider-show');

		sliderViewer.addEventListener('click', (e) => {
			if (e.target === sliderViewer) {
				swiper.classList.remove('slider-show');
				sliderViewer.classList.remove('slider-show');
			}
			if (e.target === swiperButton) {
				swiper.classList.remove('slider-show');
				sliderViewer.classList.remove('slider-show');
			}
		});
	})
}

swiperSlider()


function buttonActive() {
	const buttons = document.querySelectorAll('.reviews__item--like');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			button.classList.toggle('active')
		})
	})
}

buttonActive() 