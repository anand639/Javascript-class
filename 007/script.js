// document.getElementById("alertButton").addEventListener("click", function(){
//     alert("Do you want to submit the form?");
// });

document.addEventListener("DOMContentLoaded", function() {
    const contentText = document.getElementById("contentText");
    const textInput = document.getElementById("textInput");
    const updateButton = document.getElementById("updateButton");
    const resetButton = document.getElementById("resetButton");

    // Add event listener for updating text
    updateButton.addEventListener("click", function() {
        const newText = textInput.value;
        if (newText.trim() !== "") {
            contentText.textContent = newText;
        }
    });
resetButton.addEventListener("click", function(){
    contentText.textContent = "Text is reset, type again to update";
    textInput.value = "";
})

});
