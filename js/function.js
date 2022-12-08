document.querySelector(".addKitten").addEventListener("click", timeout);

function timeout(){
    setTimeout(myResults, 400);
}

function myResults() {
    console.log("myResults")
    let random1 = Math.floor(Math.random() * 300+1); // image will be randomly positioned 
    let random2 = Math.floor(Math.random() * 300+1); // image will be randomly positioned 
    let img = document.createElement('img') // shows image on screen
    img.src = 'http://placekitten.com/'+random2+"/"+random1; // images will be randomly positioned 
   
    document.body.appendChild(img); // 
   
    let container = document.querySelector('.container'); // shows image within the container
    container.appendChild(img);


}

// button sound effect
const audio = new Audio("./meow.mp3");
const buttons = document.querySelectorAll(".addKitten");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});