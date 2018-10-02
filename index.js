'use strict';

// Import the interface to Tessel hardware
const tessel = require('tessel');
const camera = require('./camera/camera.js');
const servo = require('./servo/servo.js');

// Turn one of the LEDs on to start.
tessel.led[2].on();

// Blink!
setInterval(() => {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("I'm blinking! (Press CTRL + C to stop)");
