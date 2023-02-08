 
 var drums = document.querySelectorAll(".drum");

 for(let i=0; i<drums.length; i++){

    drums[i].addEventListener("click", function () { 
        
        makeSound(this.innerHTML);
        flash(this.innerHTML);
    });
 }

 document.addEventListener("keydown", function(){

    makeSound(event.key);
    flash(event.key);
 });

 function flash(key)
{
    var curB = document.querySelector("."+key);

    curB.classList.add("pressed");

    setTimeout(function(){
        curB.classList.remove("pressed");
    }, 100);
}

 function makeSound(key)
 {
    switch(key)
    {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
            
        default: console.log(key);
        }
 }