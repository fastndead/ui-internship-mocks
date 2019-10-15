window.onload = () => {
    const video = document.getElementById("video");
    const btn = document.getElementById("playBtn");

    btn.onclick = function () {
        if (video.paused) {
            video.play();
            btn.classList.add("button_paused")
        } else {
            video.pause();
            btn.classList.remove("button_paused")
        }
    };

    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const attribute = "disabled";

    for (const form of [form1, form2]) {
        if (form) {
            form.oninput = function () {
                let submitButton = form.querySelector('.button');
                if (form.checkValidity()) {
                    submitButton.removeAttribute(attribute);
                } else {
                    submitButton.setAttribute(attribute, attribute);
                }
            };
        }
    }
};
