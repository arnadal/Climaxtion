var lastScroll = 0;

window.onscroll = function() {
  checkNavbar();
}

function checkNavbar() {
  var thisScroll = document.body.scrollTop || document.documentElement.scrollTop;
  if (thisScroll > lastScroll) {
    document.getElementsByTagName(`nav`)[0].className = `collapsed`;
    console.debug("Collapsing: ", thisScroll, " > ", lastScroll);
  } else if (thisScroll < lastScroll) {
    document.getElementsByTagName(`nav`)[0].className = `uncollapsed`;
    console.debug("Uncollapsing: ", thisScroll, " < ", lastScroll);
  } else {
    lastScroll = thisScroll;
  }
  lastScroll = thisScroll;
}