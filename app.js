let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoiceList() {
     voices = window.speechSynthesis.getVoices();
     voices.forEach((voice, i) => {
          let option = document.createElement("option")
          option.textContent = voice.name;
          option.setAttribute("value", i);
          voiceSelect.appendChild(option);
     });
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
     speechSynthesis.onvoiceschanged = populateVoiceList;
}

voiceSelect.addEventListener("change", () => {
     speech.voice = voices[voiceSelect.value];
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
     speech.text = document.querySelector("textarea").value;
     window.speechSynthesis.speak(speech);
});
