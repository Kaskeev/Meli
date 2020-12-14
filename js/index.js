$(document).ready(function(){
    $(".header__burger").click(function(event){
        $(".header__burger, .header__nav").toggleClass('active');
    });
});
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        infinite: true,
        initialSlide: 0,
          autoplay: true,
          autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
			          	slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                   variableWidth: true,
                   centerMode: true
              }
            },
            {
              breakpoint: 320,
              settings: {
                  slidesToShow: 1,
                  variableWidth: true,
                  centerMode: true
              }
            },
          ]
    }); 
});
$(document).ready(function(){
    $('.recommend__slide').slick({
        arrows: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        mobileFirst: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                 variableWidth: true,
                 centerMode: true
            }
          },
          {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
                centerMode: true
            }
          },
        ]
    }); 
});

