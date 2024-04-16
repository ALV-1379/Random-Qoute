export const paragraph = document.querySelector('.quote');
const authorName = document.querySelector('.name');
const speech = window.speechSynthesis

export const speechFn = () => {
    const sp = new SpeechSynthesisUtterance(`${paragraph.innerText} by ${authorName.innerText}`);
    speech.speak(sp)
}