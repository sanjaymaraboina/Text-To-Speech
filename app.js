const speakBtn = document.querySelector("#playBtn");
const query = document.querySelector("#text")
speakBtn.addEventListener("click", palyspeech);
function palyspeech(){
    const speech = new SpeechSynthesisUtterance(query.value);
    speechSynthesis.speak(speech);
    
}