set-canvas-pixels
=================
### Sets a canvas pixels from an array of RGBA pixel values

Sets the pixels of a canvas from an array of RGBA values between 0 and 255.

Install
-------

```bash
$ npm install set-canvas-pixels
```

Usage
-----

```javascript
var setCanvasPixels = require('set-canvas-pixels');

var pixels = [0, 0, 0, 255, 255, 255, 255, 255/*, ...*/];

var canvas = document.getElementById('canvas');
setCanvasPixels(canvas, pixels);
```