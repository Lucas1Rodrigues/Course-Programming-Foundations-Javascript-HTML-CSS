// write your code here
//create a image with 200 height and 200 width

var img = new SimpleImage(200,200);


for(var pixel of img.values()){
        pixel.setGreen(255);
        pixel.setRed(255);
        pixel.setBlue(0);
}
print(img);
