const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 15;
var currentX= 0;
var currentY=0;
var previousX=0;
var previousY=0;

var canvas;
var context;
function prepareCanvas() {
    console.log('Preparing Canvas');
    canvas = document.getElementById('cnv')
    context = canvas.getContext('2d');

    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    var isDrawing = false;

    document.addEventListener('mousedown', function (event) {
        console.log('X coordinate: ' + event.clientX);
        console.log('Y coordiante:' + event.clientY);
        console.log('mouse pressed');
        currentX= event.clientX-canvas.offsetLeft;
        currentY=event.clientY-canvas.offsetTop;
        isDrawing=true;
        
    });

    document.addEventListener('mousemove', function (event) {

        if (isDrawing){
            previousX=currentX;
            currentX= event.clientX-canvas.offsetLeft;

            previousY=currentY;
            currentY=event.clientY-canvas.offsetTop;

            draw();
        }
    });

    document.addEventListener('mouseup', function (event) {
        console.log('mouse is released');
        isDrawing= false;
        
    });

    canvas.addEventListener('mouseleave', function (event) {
        isDrawing= false;
        
    });

    document.addEventListener('touchstart', function (event) {
        console.log('X coordinate: ' + event.clientX);
        console.log('Y coordiante:' + event.clientY);
        console.log('touch down');
        isDrawing=true;
        currentX= event.touches[0].clientX-canvas.offsetLeft;
        currentY=event.touches[0].clientY-canvas.offsetTop;
        
    });

    canvas.addEventListener('touchend', function (event) {
        isDrawing= false;
        
    });

    canvas.addEventListener('touchcancel', function (event) {
        isDrawing= false;
        
    });

    canvas.addEventListener('touchmove', function (event) {

        if (isDrawing){
            previousX=currentX;
            currentX= event.touches[0].clientX-canvas.offsetLeft;

            previousY=currentY;
            currentY=event.touches[0].clientY-canvas.offsetTop;

           draw();
        }
    });


}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    var currentX= 0;
    var currentY=0;
    var previousX=0;
    var previousY=0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);



    
}