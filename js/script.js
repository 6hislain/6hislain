window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

function type(i, t, ie, oe) {
  input = document.getElementById(ie).innerHTML;
  document.getElementById(oe).innerHTML += input.charAt(i);
  setTimeout(function () {
    i < input.length - 1 ? type(i + 1, t, ie, oe) : false;
  }, t);
}

type(0, 200, "text", "screen");
