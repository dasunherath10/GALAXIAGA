/* parallax image effect */
  let star = document.getElementById('star');
  let planet1 = document.getElementById('planet1');
  let planet2 = document.getElementById('planet2');
  let text = document.getElementById('text');
  let front = document.getElementById('front');

  window.addEventListener('scroll', function(){
      let value = window.scrollY;
      ballon.style.top = value * 0.4 + 'px';
      planet.style.top = value * 0.5 + 'px';
      text.style.marginRight = value * 0.9 + 'px';       
  })

// mobile navbar collapse
  toggleCollapse('mobile-menu', false);

/* -------------------------------------------------- */
