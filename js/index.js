
// CARUSEl 

const owl = $('.owl-carousel');

owl.owlCarousel({
  center: true,
  loop: true, //бесконечно
  margin: 30,
  startPosition: 0, //откуда начинать
  items: 1, //3 слайда за раз
  responsive: {
		600: {
			items: 3,
			startPosition: 1,
		},
		1200: {
      items: 3,
			margin: 30,
		},
	},
} );

$('.slider__btn--prev').click(function() {
  owl.trigger('prev.owl.carousel');
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


//NAV ICON

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
  nav.classList.toggle('nav--mobile')
  menuIcon.classList.toggle('menu-icon--active');
}
