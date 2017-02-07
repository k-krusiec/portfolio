document.addEventListener('DOMContentLoaded', function() {

  var menuLogo = document.querySelector('.menu-logo');

  function changeMenuOnScroll() {
    // var menuLogo = document.querySelector('.menu-logo');
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

  function scrollToTop(scrollDuration) {

    const scrollHeight = window.scrollY,
          scrollStep = Math.PI / ( scrollDuration / 15 ),
          cosParameter = scrollHeight / 2;
    var   scrollCount = 0,
          scrollMargin,
          scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
              scrollCount = scrollCount + 1;
              scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
              window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } else clearInterval(scrollInterval);
          }, 15 );
  }

  menuLogo.addEventListener('click', function() {
    scrollToTop(500);
  })



})
