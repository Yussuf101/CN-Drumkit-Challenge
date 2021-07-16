
let key = "";

const drumKitButtons = document.querySelectorAll(".drum")
function makeSound(){
for (let i=0; i<drumKitButtons.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        key = this.innerHTML.toLowerCase();
        switch(key){
            case"w":
            let tom =new Audio('sounds/tom.wav');
            tom.play();
            break;
        
            case"a":
            let boom =new Audio("sounds/boom.wav");
            boom.play();
            break;
        
            case "s":
            let hihat =new Audio("sounds/hihat.wav");
            hihat.play();
            break;
        
            case "d":
            let clap =new Audio("sounds/clap.wav");
            clap.play();
            break;
        
            case "j":
            let snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        
            case "f":
            let openhat = new Audio("sounds/openhat.wav");
            openhat.play();
            break;
        
            case "g":
            let ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        
            case "k":
            let tink = new Audio("sounds/tink.wav");
            tink.play();
            break;
        
            case "l":
            let kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        
            default:console.log(key)
        };
        return key
    });
}};
makeSound()

document.addEventListener("keypress", function(event){
    key = event.key
        switch(key){
            case"w":
            let tom =new Audio('sounds/tom.wav');
            tom.play();
            break;
        
            case"a":
            let boom =new Audio("sounds/boom.wav");
            boom.play();
            break;
        
            case "s":
            let hihat =new Audio("sounds/hihat.wav");
            hihat.play();
            break;
        
            case "d":
            let clap =new Audio("sounds/clap.wav");
            clap.play();
            break;
        
            case "j":
            let snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        
            case "f":
            let openhat = new Audio("sounds/openhat.wav");
            openhat.play();
            break;
        
            case "g":
            let ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        
            case "k":
            let tink = new Audio("sounds/tink.wav");
            tink.play();
            break;
        
            case "l":
            let kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        
            default:console.log(key)
        };
        return key
    });

