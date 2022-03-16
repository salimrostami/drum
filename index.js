var elements = document.querySelectorAll(".drum");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", clickHandler);
}

function clickHandler(){
  var btnText = this.innerHTML;
  makeSound(btnText);
  btnAnimation(btnText);
}

document.addEventListener("keypress", keyPressHandler);

function keyPressHandler(event){
  var keyText = event.key;
  makeSound(keyText);
  btnAnimation(keyText);
}

function makeSound (key) {
  switch (key) {
    case "a":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;
    case "s":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;
    case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;
    case "f":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
    break;
    default: console.log(key);
  }
}

function btnAnimation(currentKey){
  var activeBtn = document.querySelector("."+currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  }, 100);
}
