function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll(".ranked-list li")
  console.log(lis)
  for (let i=0; i < lis.length; i++) {
    lis[i].innerText = (parseInt(lis[i].innerText) + n).toString()
  }
}

function deepestChild() {
  
}

increaseRankBy(100)