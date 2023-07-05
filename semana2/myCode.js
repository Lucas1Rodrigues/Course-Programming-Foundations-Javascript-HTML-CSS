function perimeter(nameFile){
    var image = new SimpleImage(nameFile);
    var heigth = image.getHeight();
    var width = image.getWidth();
    answer = 2*heigth + 2*width;
    return answer;
}

print(perimeter("rodger.png"));
