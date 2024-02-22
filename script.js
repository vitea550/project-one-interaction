document.addEventListener("DOMContentLoaded", function () {
    const flashlight = document.createElement("div");
    flashlight.classList.add("flashlight");
    document.body.appendChild(flashlight);

    document.addEventListener("mousemove", function (event) {
        const x = event.clientX;
        const y = event.clientY;
        flashlight.style.left = x + "px";
        flashlight.style.top = y + "px";
    });
});


s