const { body } = document;
let ZoomActived = false;

window.addEventListener('click', () => {
    ZoomActived = !ZoomActived;
});

window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;

    if (ZoomActived) {
        body.style.transform = `scale(2)`
        body.style.transformOrigin = `${x}px ${y}px`
    } else {
        body.style.transform = `none`
    }
})