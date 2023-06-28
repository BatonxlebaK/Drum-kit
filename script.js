document.addEventListener("keydown", playSound)
console.log(key);
function playSound(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if (!audio) {
        return;
    };
    audio.currentTime = 0;
    // key.classList.add("playing");
    audio.play();
    setTimeout(function () {
        key.classList.remove("playing");
    }, 100);
};