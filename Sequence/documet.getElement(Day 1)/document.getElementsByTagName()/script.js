function highlightParagraphs() {
    // Get all <p> elements
    var paragraphs = document.getElementsByTagName("p");

    // Loop through the HTMLCollection and change the background color
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "yellow";
    }
}
