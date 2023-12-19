let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #ffff94;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#ffff94 ;">lugar emocional comida excepcional.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
