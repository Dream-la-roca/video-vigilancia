var objetos = [];
var detectado = false;
function setup() {
    canvas = createCanvas(1000, 700);
    background("green");
    detector = ml5.objectDetector("cocossd", listo);
    video.hide();
}
function listo() {
    console.log("listo!!!");
    detectado = true;
    
}
function respuesta(error, resultado) {
    if (!error) {
        console.log(resultado);
        objetos = resultado;
        
    }
}
function draw() {
    detector.detect(video, respuesta);
    image(video, 0, 0, 1000, 700) 
    video.size(1000, 700);
    if (detectado) {
        for (var i = 0; i < objetos.length; i++) {
            noFill();
            stroke("green");
            rect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height)
            nombre = objetos[i].label;
            porcentaje = Math.round(objetos[i].confidence * 100);
            mensaje = nombre + "  " + porcentaje + "%";
            textSize(30);
            text(mensaje, objetos[i].x, objetos[i].y)
        }
    }
}
function preload(){
    video = createVideo("Exposición  de  autos  deportivos de lujo.mp4")
}
function play(){
    video.loop()
    video.speed(1)
    video.volume(1)
}
function pause(){
    video.pause()
}