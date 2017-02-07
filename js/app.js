document.addEventListener('DOMContentLoaded', function() {

  function changeMenuOnScroll() {
    var menuLogo = document.querySelector('.menu-logo');
    var headerLogo = document.querySelector('.h-logo');
    var headerLogotxt = document.querySelector('.h-txt');

    window.addEventListener('scroll', function(e) {
      var top = this.scrollY;
      if (top >= 136) {
        menuLogo.classList.remove('hidden');
        headerLogo.classList.add('hidden');
        headerLogotxt.classList.add('hidden');
      } else {
        menuLogo.classList.add('hidden');
        headerLogo.classList.remove('hidden');
        headerLogotxt.classList.remove('hidden');
      }
    }, false);
  }

  changeMenuOnScroll();
})
