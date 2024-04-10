export const paragraph = document.querySelector('.quote');
const authorName = document.querySelector('.name');

const speech = window.speechSynthesis

export const copyFn = () => {
    navigator.clipboard.writeText(paragraph.innerText)
}

export const speechFn = () => {
    const sp = new SpeechSynthesisUtterance(`${paragraph.innerText} by ${authorName.innerText}`);
    speech.speak(sp)
}

export const tweetFn = () => {
    const tweet = `https://twitter.com/intent/tweet?url=${paragraph.innerText}`

    window.open(tweet, '_blank')
}

export const aboutFn = ()=>{
    const about  = `https://en.wikipedia.org/wiki/${authorName.innerText}`
    window.open(about , '_blank')
}