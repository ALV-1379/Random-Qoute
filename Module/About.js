const authorName = document.querySelector('.name');

export const aboutFn = ()=>{
    const about  = `https://en.wikipedia.org/wiki/${authorName.innerText}`
    window.open(about , '_blank')
}