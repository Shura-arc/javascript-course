function highlightAllParagraphs() {
    // Select all paragraphs with the class "highlight"
    var highlights = document.querySelectorAll(".highlight");

    // Loop through the NodeList and change the background color
    highlights.forEach(function(paragraph) {
        paragraph.style.backgroundColor = "yellow";
    });
}
