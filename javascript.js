function changeBackground() {
    var mainElement = document.querySelector('.main');
    
    if (mainElement) {
        var currentColor = mainElement.style.backgroundColor;
        var newBackgroundColor = (currentColor === "white" || currentColor === "") ? "#4d4d4d" : "white";
        var newTextColor = (newBackgroundColor === "white") ? "#4d4d4d" : "white";

        mainElement.style.backgroundColor = newBackgroundColor;
        mainElement.style.color = newTextColor;
    }
}
