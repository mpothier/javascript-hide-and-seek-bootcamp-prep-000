function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll(".ranked-list li")
  for (let i=0; i < lis.length; i++) {
    lis[i].textContent = parseInt(lis[i].textContent) + n
  }
}

function deepestChild() {
  var nodes = []
  var current
  var next = []
  current = document.querySelectorAll("div#grand-node div")
  console.log()
}