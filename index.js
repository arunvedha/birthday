var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerText;
    var original = this.className;
    var result = original.substr(0, original.indexOf(" "));
    makeSound(result);

    buttonAnimation(result);
  });
}
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drums")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerText;
    var original = this.className;
    var result = original.substr(0, original.indexOf(" "));
    console.log("11", result);
    makeSound(result);

    buttonAnimation(result);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});
var tom1;
function makeSound(key) {
  if (tom1) {
    tom1.currentTime = 0;
    tom1.pause();
  }
  switch (key) {
    case "h":
      tom1 = new Audio("sounds/uma.ogg");
      tom1.play();
      break;

    case "a":
      tom1 = new Audio("sounds/nishant.ogg");
      tom1.play();
      break;
    case "p":
      tom1 = new Audio("sounds/arun.ogg");
      tom1.play();
      break;
    case "pp":
      tom1 = new Audio("sounds/swetha.aac");
      tom1.play();
      break;
    case "y":
      tom1 = new Audio("sounds/arvind.ogg");
      tom1.play();
      break;

    case "b":
      tom1 = new Audio("sounds/aashik.ogg");
      tom1.play();
      break;
    case "i":
      tom1 = new Audio("sounds/sauj.ogg");
      tom1.play();
      break;
    case "r":
      tom1 = new Audio("sounds/rohu.ogg");
      tom1.play();
      break;
    case "t":
      tom1 = new Audio("sounds/megna.ogg");
      tom1.play();
      break;
    case "hh":
      tom1 = new Audio("sounds/kavya.ogg");
      tom1.play();
      break;
    case "d":
      tom1 = new Audio("sounds/sashank.ogg");
      tom1.play();
      break;
    case "aa":
      tom1 = new Audio("sounds/menaka.ogg");
      tom1.play();
      break;
    case "yy":
      tom1 = new Audio("sounds/ami.ogg");
      tom1.play();
      break;
    case "s":
      tom1 = new Audio("sounds/bonus.mp3");
      tom1.play();
      break;

    default:
      console.log("2", key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
