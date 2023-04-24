runSpeechRecog = () => {
    // document.getElementById("input").innerHTML = "Loading text...";
    var output = document.getElementById('input');
    var otp = document.getElementById('output');
    var otpOne = document.getElementById('otp');
    let recognization = new webkitSpeechRecognition();
    recognization.onstart = () => {
        otpOne.innerHTML = "Listening...";
    }
    recognization.onresult = (e) => {
        var transcript = e.results[0][0].transcript;
        otp.innerHTML = transcript;
        // output.classList.remove("hide")
        // action.innerHTML = "";
    }
    recognization.start();
}