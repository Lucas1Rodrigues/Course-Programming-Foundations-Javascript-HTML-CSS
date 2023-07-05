function getPixels(simpleImage){
    var someImage = new SimpleImage(nameFile);
    var height = someImage.getHeight();
    var width = someImage.getwidth();
    var answer = height * width;
    return answer;
}
