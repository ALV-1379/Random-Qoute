export const paragraph = document.querySelector('.quote');

export const copyFn = () => {
    navigator.clipboard.writeText(paragraph.innerText)
}
