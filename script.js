
document.addEventListener('DOMContentLoaded', function() {
    
    const blueButton = document.getElementById('blue');
    const whiteButton = document.getElementById('white');
    const brownButton = document.getElementById('brown');
    const redButton = document.getElementById('red');

        function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
    }

    
    blueButton.addEventListener('click', function() {
        changeBackgroundColor('blue');
    });

    whiteButton.addEventListener('click', function() {
        changeBackgroundColor('white');
    });

    brownButton.addEventListener('click', function() {
        changeBackgroundColor('brown');
    });

    redButton.addEventListener('click', function() {
        changeBackgroundColor('red');
    });
});
