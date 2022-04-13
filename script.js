window.addEventListener("load", init);
function ID(elem) {
  return document.getElementById(elem);
}
function $1(elem) {
  return document.querySelector(elem);
}
function $2(elem) {
  return document.querySelectorAll(elem);
}

var kepek = [
  {
    kepHely: "kepek/kep1.jpg",
  },
  {
    kepHely: "kepek/kep1.jpg",
  },
  {
    kepHely: "kepek/kep2.jpg",
  },
  {
    kepHely: "kepek/kep2.jpg",
  },
  {
    kepHely: "kepek/kep3.jpg",
  },
  {
    kepHely: "kepek/kep3.jpg",
  },
  {
    kepHely: "kepek/kep4.jpg",
  },
  {
    kepHely: "kepek/kep4.jpg",
  },
  {
    kepHely: "kepek/kep5.jpg",
  },
  {
    kepHely: "kepek/kep5.jpg",
  },
];

function init() {
  kartyak();
}
function kartyak() {
  var txt = "";
  for (let index = 0; index < kepek.length; index++) {
    txt += "<div><img src='" + kepek[index].kepHely + "'></div>";
  }
  $2(".container")[0].innerHTML = txt;
}

/*kepek.addEventListener("click", megforditas);

function megforditas() {

}*/