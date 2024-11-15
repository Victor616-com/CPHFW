let video;
let poseNet;
let poses = [];
let shirtImage;

function preload() {
  shirtImage = loadImage("resources/outfit1.png");
}

function setup() {
  const canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0, 0);

  // Create video capture and flip it
  video = createCapture(VIDEO);
  video.size(width, height);
  video.style('transform', 'scaleX(-1)');
  video.hide();

  // Initialize PoseNet
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', results => {
    poses = results;
  });
}

function modelLoaded() {
  console.log("PoseNet model loaded");
}

function draw() {
  // Display the video
  translate(width, 0); // Mirror the canvas
  scale(-1, 1);
  image(video, 0, 0, width, height);

  // Draw the outfit
  drawOutfit();
}

function drawOutfit() {
  if (poses.length > 0) {
    const pose = poses[0].pose;

    const leftShoulder = pose.leftShoulder;
    const rightShoulder = pose.rightShoulder;

    const shirtWidth = dist(leftShoulder.x, leftShoulder.y, rightShoulder.x, rightShoulder.y) * 2.5;
    const shirtHeight = shirtWidth * 1.2;
    const shirtX = (leftShoulder.x + rightShoulder.x) / 2 - shirtWidth / 2;
    const shirtY = leftShoulder.y - shirtHeight / 6;

    image(shirtImage, shirtX, shirtY, shirtWidth, shirtHeight);
  }
}
