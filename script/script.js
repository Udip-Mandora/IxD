runSpeechRecog = () => {
    // document.getElementById("input").innerHTML = "Loading text...";
    var output = document.getElementById('input');
    var otp = document.getElementById('output');
    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
        otp.innerHTML = "Listening...";
    }
    recognization.onresult = (e) => {
        var transcript = e.results[0][0].transcript;
        output.innerHTML = transcript;
        // output.classList.remove("hide")
        // action.innerHTML = "";
    }
    recognization.start();
}