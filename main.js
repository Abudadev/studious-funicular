song = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload(){
 song = loadSound("LIMBO.mp3");
}

function setup(){
    canvas = createCanvas(300,450);
    canvas.position(500,300)

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,ml);
    posenet.on("pose",gotposes)
}

function draw(){
    image(video,0,0,350,250);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(2);
}

function ml(){
    console.log("{({(-+^%$ HI $%^+-)})}");
}

function gotposes(results){
 if(results.length > 0){
  console.log(results);

  RightWristX = results[0].pose.rightWrist.x;
  RightWristY = results[0].pose.rightWrist.y;
  LeftWristX = results[0].pose.leftWrist.x;
  LeftWristY = results[0].pose.leftWrist.y;

  console.log(RightWristX + "and rightwrist Y " + RightWristY);
  console.log(LeftWristX + "and leftwrist Y " + LeftWristY);
 }
}