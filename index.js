var total=document.querySelectorAll(".drum").length;
for(var i=0;i<total;i++)
    {
document.querySelectorAll(".drum")[i].addEventListener("click",handleevent);
        function handleevent(){
        
            var button1=this.innerHTML;
            makeSound(button1);
            animation(button1);
            }
    }

        document.addEventListener('keydown', logKey);

       function logKey(e) {
                makeSound(e.key);
                animation(e.key);
         }
    

function makeSound(key)
{
   switch(key)
                {
                    case"w":
                             var tom1 = new Audio("sounds/tom-1.mp3");
                             tom1.play();
                    case"a":
                             var tom2 = new Audio("sounds/tom-2.mp3");
                             tom2.play();
                    case"s":
                             var tom3 = new Audio("sounds/tom-3.mp3");
                             tom3.play();
                    case"d":
                             var tom4 = new Audio("sounds/tom-4.mp3");
                             tom4.play();
                    case"j":
                             var crash = new Audio("sounds/crash.mp3");
                             crash.play();
                    case"k":
                             var snare = new Audio("sounds/snare.mp3");
                             snare.play();
                   case"l":
                             var kick = new Audio("sounds/kick-bass.mp3");
                             kick.play();
                 
                          
                }  
}
    
function animation(active)
{
    var a=document.querySelector("."+active);
    
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed");
    },100);
}

               