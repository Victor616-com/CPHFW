let video;
let poseNet;
let poses = [];
let shirtImage;
let cachedShirtWidth = 0;
let cachedShirtHeight = 0;
let lastPoseTime = 0;

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

  // Initialize PoseNet with flipHorizontal for better performance
  poseNet = ml5.poseNet(video, { flipHorizontal: false }, modelLoaded);
  poseNet.on('pose', results => {
    poses = results;
  });

  // Limit the frame rate
  frameRate(30);
}

function modelLoaded() {
  console.log("PoseNet model loaded");
}

function draw() {
  // Only update the canvas if enough time has passed
  if (millis() - lastPoseTime > 33) {
    lastPoseTime = millis();
    image(video, 0, 0, width, height);
    drawOutfit();
  }
}

function drawOutfit() {
  if (poses.length > 0) {
    const pose = poses[0].pose;
    const leftShoulder = pose.leftShoulder;
    const rightShoulder = pose.rightShoulder;

    // Only recalculate if the pose data has changed
    const newShirtWidth = dist(leftShoulder.x, leftShoulder.y, rightShoulder.x, rightShoulder.y) * 2.5;
    if (newShirtWidth !== cachedShirtWidth) {
      cachedShirtWidth = newShirtWidth;
      cachedShirtHeight = cachedShirtWidth * 1.2;
    }

    const shirtX = (leftShoulder.x + rightShoulder.x) / 2 - cachedShirtWidth / 2;
    const shirtY = leftShoulder.y - cachedShirtHeight / 6;

    image(shirtImage, shirtX, shirtY, cachedShirtWidth, cachedShirtHeight);
  }
}
