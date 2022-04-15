song = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("Avicii - The Nights (1).mp3")
    song2 = loadSound("Against the Current - Legends Never Die.mp3")

}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('PoseNet is initialized')
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function play()
{
    song.play();
    song2.play();
    song.setVolume(1);
    song2.setVolume(0.9);
    song.rate(1);
    song.rate(1.25);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);

    }
}