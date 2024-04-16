export const paragraph = document.querySelector('.quote');

export const tweetFn = () => {
    const tweet = `https://twitter.com/intent/tweet?url=${paragraph.innerText}`

    window.open(tweet, '_blank')
}
