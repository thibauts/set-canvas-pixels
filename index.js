
function setCanvasPixels(canvas, pixels) {
  var ctx = canvas.getContext('2d');
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  for(var i=0; i<data.length; i++) {
    data[i] = pixels[i];
  }
  ctx.putImageData(imageData, 0, 0);
}

module.exports = setCanvasPixels;