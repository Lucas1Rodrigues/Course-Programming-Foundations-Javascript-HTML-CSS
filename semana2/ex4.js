var image = new SimpleImage("astrachan.jpg");
var H = image.getHeight();
for(var pixel of image.values()){
    if(pixel.getY() > H - 10){
         pixel.setRed(0);
         pixel.setBlue(0);
         pixel.setGreen(0);
    }
}

print(image);