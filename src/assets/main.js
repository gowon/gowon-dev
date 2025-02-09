(function (window) {
    "use strict";

    const Typewriter = new window.Typewriter('#typewriter', {
        strings: ['create solutions.', 'constantly tinker.', 'love design.', 'do dope things.'],
        autoStart: true,
        loop: true,
        pauseFor: 3000
    });

    // todo: pull random N images from collection and init
    window.bgzy.init([
        ["https://images.unsplash.com/photo-1547582061-a3e1aa4164ee", "fadeOut"],
        ["https://images.unsplash.com/photo-1511447333015-45b65e60f6d5", "zoomFadeOut"],
        ["https://images.unsplash.com/photo-1503876466-1fc5143eda57", "slideLeft"]
    ], {
        timeout: 30000,
        showTicker: false
    });

    window.AOS.init({
        once: true
    });

    // polygowon svg animation
    (function () {
        var wrapper = document.querySelector('figure.wrapper svg')
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const draw = () => {
            wrapper.classList.add('active');
        }
        const redraw = async () => {
            wrapper.classList.remove('active')
            await delay(2500);
            wrapper.classList.add('active')
        };

        wrapper.addEventListener('click', redraw, false)

        // Play draw animation once
        setTimeout(draw, 400)
    })();
})(window);