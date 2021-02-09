var panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeBig();
        panel.classList.add('big');

    })
})
function removeBig() {
    panels.forEach((panel) => {
        panel.classList.remove('big')
    })
}