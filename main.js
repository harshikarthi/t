function start()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/B1vmRzLXh/model.json',modelready);
}


function modelready()
{
    console.log("Model ready");
}