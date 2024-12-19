function validateLogin() {
    let firstCode = 
        document.getElementById("code-1").value;
        let secondCode = 
        document.getElementById("code-2").value;
        let thirdCode = 
        document.getElementById("code-3").value;
        let fourthCode = 
        document.getElementById("code-4").value;
        let fifthCode = 
        document.getElementById("code-5").value;
        let sixthCode = 
        document.getElementById("code-6").value;

    if (firstCode === "4" && secondCode === "5" && thirdCode === "6" && 
        fourthCode === "7" && fifthCode === "8" && sixthCode === "9") {
        response.style.color = "green";
        response.textContent = "Login successful!";

    } 
    else {
        response.style.color = "red";
        response.textContent = "Invalid code. Please try again.";
    }
}