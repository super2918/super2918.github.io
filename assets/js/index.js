(function() {
  function text3Dshadow() {
    const $text = document.querySelector('.home__title');
    let shadow = '';
  
    const SHADOW_COUNT = 30;
  
      for(let i = 0; i < SHADOW_COUNT; i++) {
        shadow += (shadow ? ',' : '') + -i * 1+'px ' + i * 1 + 'px #d9d9d9';
      }
  
    $text.style.textShadow = shadow
  }

  function showMenu (navToggle, navMenu) {
    const $navMenu = document.querySelector(navMenu),
    $navToggle = document.querySelector(navToggle);

    if($navToggle && $navMenu) {
      $navToggle.addEventListener('click', () => {
        $navMenu.classList.toggle('show');
        $navToggle.classList.toggle('show');
      })
    }
  }

  function linkAaction () {
    const $navLinks = document.querySelectorAll('.nav__link');
    const $navMenu = document.querySelector('.nav__menu');

    $navLinks.forEach( link => link.addEventListener('click', () => {
      $navMenu.classList.remove('show');
    }));
  }

  

  function init() {
    text3Dshadow();
    showMenu('.nav__toggle', '.nav__menu');
    linkAaction();
  }

  init();

})();
