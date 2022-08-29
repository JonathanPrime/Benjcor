/* Navbar */
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

/* Remove menu and search icon on scroll */
window.onscroll = () => {
    navbar.classList.remove('active');
}

$('#customers-testimonials').owlCarousel({
    /* rtl: true, */
    loop: true,
    nav: true,
    navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
    /* center: true, */
    items: 4,
    margin: 0,
    autoplay: false,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
  
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 4
      },
      3840: {
        items: 4
      }
    }
  });
  
  $('.products .btn').click(function(){
  
    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        console.log('prueba1');
        $('.products .box').show(400);
    }else{
        console.log('prueba2');
        $('.products .box').not('.'+filter).hide(200);
        $('.products .box').filter('.'+filter).show(400);
    }
  
    $(this).addClass('button-active').siblings().removeClass('button-active');
  
  });
  
  $('.owl-filter-class').on('click', '.item', function () {
    var $item = $(this);
    var filter = $item.data('owl-filter')
    owl.owlcarousel2_filter(filter);
  });
  var owl = $('.owl-carousel-class').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 4 ,
  });

/* Header Animation */
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

popupWhatsApp = () => {

    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
  
    btnClosePopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
    })
  
    btnOpenPopup.addEventListener("click", () => {
      popup.classList.toggle('is-active-whatsapp-popup')
      popup.style.animation = "fadeIn .6s 0.0s both";
    })
  
    sendBtn.addEventListener("click", () => {
      let msg = document.getElementById('whats-in').value;
      let relmsg = msg.replace(/ /g, "%20");
      //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
      window.open('https://wa.me/573133043720?text=' + relmsg, '_blank');
  
    });
    /* Open pop-up in 15 seconds */
    /* setTimeout(() => {
      popup.classList.toggle('is-active-whatsapp-popup');
    }, 15000); */
  }
  

popupWhatsApp();
