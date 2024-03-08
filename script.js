document.addEventListener('DOMContentLoaded', function() {
    var emojiDivs = document.querySelectorAll('.emoji div');

    emojiDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            // Remove 'active' class and border from all divs
            emojiDivs.forEach(function(innerDiv) {
                innerDiv.classList.remove('active');
                
            });

            // Add 'active' class and border to the clicked div
            div.classList.add('active');
        });
    });
});


function resetTextarea() {
// Get the textarea element by its ID
var textarea = document.getElementById('feedbackTextarea');

// Reset the value to an empty string
textarea.value = '';

}