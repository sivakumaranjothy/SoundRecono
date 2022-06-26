

function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/l8RYeUUjp/model.json",modelReady);
    }
    function modelReady(){
        classifier.classify(gotResults);
    
    }
    function gotResults(error,results){
        console.log('got results') 

    if(error){
        console.error(error);
    }
    else{
      
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML='Detected Voice of -'+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy -'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+ ","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+ ","+random_number_b+")";

    img1=document.getElementById('Dog')
    img2=document.getElementById('Cat')
    img3=document.getElementById('Lion')
    img4=document.getElementById('Cow')

    if(results[0].label=="Barking"){
       img1.src="https://img.freepik.com/free-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000";
       img2.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
       img3.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
       img4.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
    }

    if(results[0].label=="Meowing"){
      
        img2.src="https://thumbs.dreamstime.com/b/illustration-cute-grey-cat-cartoon-isolated-white-background-112004489.jpg";
        img1.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
        img3.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
        img4.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
    
    }


    if(results[0].label=="Roaring"){
       img3.src="https://img.freepik.com/free-vector/cartoon-happy-lion-isolated-white-background_29190-752.jpg?w=2000";
       img1.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
       img2.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
       img4.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 

    }

    if(results[0].label=="Mooing"){
    
        img4.src="https://img.freepik.com/free-vector/cute-cow-cartoon_160606-336.jpg?w=740";
        img3.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
        img2.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 
        img1.src="https://www.htmlcsscolor.com/preview/gallery/008B8B.png"; 

    }

    }
}