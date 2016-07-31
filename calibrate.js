// calibrate.js
var five = require("johnny-five");
var Particle = require("particle-io");
var board = new five.Board({
  io: new Particle({
    token: process.env.SPARK_TOKEN, // put your token here
    deviceId: process.env.SPARK_DEVICE_ID // get the id of your device with particle list
  })
});
board.on("ready", function() {
  new five.Servo.Continuous("D0").stop();
});
