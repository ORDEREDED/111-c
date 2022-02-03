Webcam.set({
width: 350,
height: 300,
image_format: "png",
png_quality: 90
});
var port=document.getElementById("camera");
Webcam.attach(port);

function takesnap(){
Webcam.snap(function (data_uri){
document.getElementById("snapshot").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
}); 
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pIy55I_Gl/model.json", model_loaded);
function model_loaded(){console.log('Model Loaded!');}