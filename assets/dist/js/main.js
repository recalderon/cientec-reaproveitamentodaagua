
document.addEventListener('DOMContentLoaded', (event) => {
    impress().init();

    document.addEventListener('impress:stepenter', (event) => {
        let targetzao = event.target
        let stepaudio = targetzao.querySelector('.narracao')

        if (stepaudio) {
            const player = new Plyr(stepaudio, {
                resetOnEnd: true,
                controls: [
                    'restart',
                    'play',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume',
                ]
            });
            player.play();
        }

    })
    document.addEventListener('impress:stepleave', (event) => {
        console.log(event)
        let targetzao = event.target
        let stepaudio = targetzao.querySelector('audio')
        if (stepaudio) {
            stepaudio.pause();
        }

    })

    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
    const mQ = matchMedia?.("(pointer:coarse)");
    if (mQ?.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
    } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } else {
        // Only as a last resort, fall back to user agent sniffing
        const UA = navigator.userAgent;
        hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
    }

    if (hasTouchScreen) {
        document.getElementById("play").classList.add('disabled')
    }

})