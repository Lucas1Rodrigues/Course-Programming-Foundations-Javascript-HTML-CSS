// write your code here
var img = new SimpleImage("chapel.png");

print(img);

for(var pixel of img.values()){
    pixel.setRed(255);
}

print(img);