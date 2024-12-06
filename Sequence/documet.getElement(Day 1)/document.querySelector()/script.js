function highlightFirstParagraph() {
    // Select the first paragraph with the class "highlight"
    var firstHighlight = document.querySelector(".highlight");

    // Change the background color of the selected element
    if (firstHighlight) {
        firstHighlight.style.backgroundColor = "yellow";
    }
}
