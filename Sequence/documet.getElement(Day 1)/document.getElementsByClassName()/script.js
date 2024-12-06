function showSelectedOptions() {
    // Get all elements with the class name "option"
    var options = document.getElementsByClassName("option");

    // Loop through the HTMLCollection and check which options are selected
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            console.log(options[i].value);
        }
    }
}
