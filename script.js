var timer = 60;
var score = 0;
var hitrn = 0;

//score
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

//hit
function getnewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

//bubble
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 168; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"> ${rn} </div>`;
  }
  document.querySelector("#panelbottom").innerHTML = clutter;
} // query selected that whole variable named clutter

//timer (0-60)

function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#panelbottom").innerHTML=`<h1> GAME OVER </h1>`;
    
    }
  }, 1000);
}

document
  .querySelector("#panelbottom")
  .addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
      increaseScore();
      makeBubble();
      getnewhit();
    }
  });
// Eventlistener is on panelbottom becoz  168 times we have to do bubble , if we click then it will go panelbottom(parent)
runtimer();
makeBubble();
getnewhit();

