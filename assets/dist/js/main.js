
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
    // const players = Array.from(document.querySelectorAll('audio')).map((p) => new Plyr(p, {
    //     controls: [
    //         'restart',
    //         'play',
    //         'progress',
    //         'current-time',
    //         'duration',
    //         'mute',
    //         'volume',
    //     ]
    // }));

})