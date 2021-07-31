function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video, 0, 0,640,480);
    
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);

    fill(0, 128,0);
    stroke(0, 128,0);
    rect(90,40, 460, 20);

    fill(600,0,0);
    stroke(600,0,0);
    circle(30,30,160);
}