// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});




  $('li').on('click',function() {
            $('li').removeClass('live');
            $('li').removeClass('secondary-live');
            $(this).addClass('live');
            $(this).prevAll().addClass('secondary-live');
           
        })