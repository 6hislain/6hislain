// START: loader
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

// START: typing effect
function type(i, t, ie, oe) {
  input = document.getElementById(ie).innerHTML;
  document.getElementById(oe).innerHTML += input.charAt(i);
  setTimeout(function () {
    i < input.length - 1 ? type(i + 1, t, ie, oe) : false;
  }, t);
}

type(0, 200, "text", "screen");

// START: color navbar on scroll down
const nav = document.getElementById("navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 300) nav.classList.add("bg-dark");
  else nav.classList.remove("bg-dark");
};

// START: count up
function countUp(target, id) {
  let count = 0;
  let duration = target * 300;
  const interval = Math.floor(duration / target);
  const timer = setInterval(() => {
    count++;
    document.getElementById(id).textContent = count;
    if (count >= target) {
      clearInterval(timer);
    }
  }, interval);
}
