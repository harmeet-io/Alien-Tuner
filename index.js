// Number of buttons
var numberOfButtons = document.querySelectorAll(".drum").length;

//Iterate over the buttons to see, on which the event of "click" has 
//been detected.
for(var i=0; i<numberOfButtons; i++){
 
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
   
    var buttonName = this.innerHTML;

    makeSound(buttonName);

    buttonAnimation(buttonName);
    // alert(buttonName + " got clicked");

  });

}

//Event Listener for keyboard use
document.addEventListener("keypress", function(event){

  makeSound(event.key);

  buttonAnimationForKeyboard(event.key);

});


//makeSound function defination
function makeSound(key) {

  switch (key) {
    case "a":
      var a = new Audio("sounds/1.mpeg");
      a.play();
      break;

    case "b":
      var b = new Audio("sounds/2.mpeg");
      b.play();
      break;

    case "c":
      var c = new Audio("sounds/3.mpeg");
      c.play();
      break;

    case "d":
      var d = new Audio("sounds/4.mpeg");
      d.play();
      break;

    case "e":
      var e = new Audio("sounds/5.mpeg");
      e.play();
      break;

    case "f":
      var f = new Audio("sounds/6.mpeg");
      f.play();
      break;

    case "g":
      var g = new Audio("sounds/7.mpeg");
      g.play();
      break;    
      
    case "h":
      var h = new Audio("sounds/8.mpeg");
      h.play();
      break; 
      
    default:
      alert(key + " key is not acceptable");
  }
}

// buttonAnimation functiond defination
function buttonAnimation(key) {

  var activeButton = document.querySelector("." + key);

  activeButton.classList.add("button");
  
  setTimeout(function(){
      activeButton.classList.remove("button");
  }, 400);
}

// buttonAnimationForKeyboard

function buttonAnimationForKeyboard(key) {

    var activeButton = document.querySelector("." + key);
  
    activeButton.classList.add("button");
    
    setTimeout(function(){
        activeButton.classList.remove("button");
    }, 400);
  }