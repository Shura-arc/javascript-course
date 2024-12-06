function showUsernames() {
    // Get all elements with the name attribute "username"
    var elements = document.getElementsByName("username");

    // Loop through the NodeList and log the value of each element
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].value);
    }
}
