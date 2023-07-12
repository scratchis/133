x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
draw_apple = "";
apple = "";
speak_data = "";
to_number = "";
function preload(){
  apple=loadImage("apple.png")
}
to_number = Number(content);
if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML("<span id='status'>Started drawing apple</span>")
  draw_apple="set";
}
else{
  document.getElementById("status").innerHTML("<span id='status'>The speech has not recognized a number</span>")
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas= createCanvas(screen_width,screen_height-150);
 canvas.position(0, 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function draw() {
  if (draw_apple === "set") {
    for (let i = 1; i <= to_number; i++) {
      let x = Math.floor(Math.random() * 700);
      let y = Math.floor(Math.random() * 400);
      image(apple, x, y, apple.width, apple.height);
    }
  }
  speak_data = to_number + " Apples drawn";
  speak();
}