import {copyFn} from "./Module/Copy.js";
import {tweetFn} from "./Module/Tweet.js";
import {aboutFn} from "./Module/About.js";
import {speechFn} from "./Module/Speech.js";


const qouteBtn = document.getElementById('new-qoute')
const baseApi = 'https://api.quotable.io';
const paragraph = document.querySelector('.quote');
const authorName = document.querySelector('.name');
const copyBtn = document.querySelector('.copy');
const speechBtn = document.querySelector('.speech');
const tweetBtn = document.querySelector('.twitter');
const aboutBtn = document.getElementById("about")


qouteBtn.addEventListener('click', async (e) => {
    qouteBtn.classList.add('loading');
    qouteBtn.innerText = 'qoute loading ...';
    try {
        const res = await fetch(`${baseApi}/random`);
        const data = await res.json();
        console.log(data);
        showQoute(data);
    } catch (error) {
        console.log(error);
    }

    qouteBtn.classList.remove('loading');
    qouteBtn.innerText = 'New Quote';
})
function showQoute(quoteData) {
    paragraph.innerText = quoteData.content;
    authorName.innerText = quoteData.author
}

copyBtn.addEventListener('click', copyFn)

speechBtn.addEventListener('click', speechFn)

tweetBtn.addEventListener('click', tweetFn)

aboutBtn.addEventListener("click" , aboutFn)