var drums = new Howl({
    src: ['./audio/drums.mp3']
});
var guitar = new Howl({
    src: ['./audio/guitar.mp3']
});
var mic = new Howl({
    src: ['./audio/mic.mp3']
});
var piano = new Howl({
    src: ['./audio/piano.mp3']
});

var audioMap = {
    "guitar-marker": guitar,
    "drums-marker": drums,
    "mic-marker": mic,
    "piano-marker": piano,
}

drums.play();
guitar.play();
mic.play();
piano.play();

window.onload = function () {
    var arMarkers = document.getElementsByClassName("ar-marker");

    Array.from(arMarkers).forEach(function(arMarker) {
        arMarker.addEventListener('markerFound', function(event) {
            console.log(event.target.id);
            audioMap[event.target.id].mute(false);
        });
        arMarker.addEventListener('markerLost', function(event) {
            console.log(event.target.id);
            audioMap[event.target.id].mute(true);
        });
    });
};