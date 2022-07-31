const play = (sound) => {
    let audio = undefined
    switch (sound) {
        case 'clap':
            audio = new Audio("./sounds/clap.wav");
            audio.play();
            displayPlayed('clap');
            break;
        case 'hihat':
            audio = new Audio("./sounds/hihat.wav");
            audio.play();
            displayPlayed('hihat');
            break;
        case 'kick':
            audio = new Audio("./sounds/kick.wav");
            audio.play();
            displayPlayed('kick');
            break;
        case 'openhat':
            audio = new Audio("./sounds/openhat.wav");
            audio.play();
            displayPlayed('openhat');
            break;
        case 'boom':
            audio = new Audio("./sounds/boom.wav");
            audio.play();
            displayPlayed('boom');
            break;
        case 'ride':
            audio = new Audio("./sounds/ride.wav");
            audio.play();
            displayPlayed('ride');
            break;
        case 'snare':
            audio = new Audio("./sounds/snare.wav");
            audio.play();
            displayPlayed('snare');
            break;
        case 'tom':
            audio = new Audio("./sounds/tom.wav");
            audio.play();
            displayPlayed('tom');
            break;
        case 'tink':
            audio = new Audio("./sounds/tink.wav");
            audio.play();
            displayPlayed('tink');
            break;
        default:
            break;
    }
}

const displayPlayed = (name) => {
    const element = document.getElementById(name);
    element.classList.add("active");

    setTimeout(() => {
        element.classList.remove("active");
    }, 200)
}