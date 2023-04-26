///Make sure the function loaded after the DOM
$(document).ready(function () {
    //Create a function that will fire when the submit <button> is clicked
    $('#submit').click(function (event) {
        event.preventDefault();
        $('#message').html("").removeClass('warning');
        //create variables for each of the form inputs    
        let nameInput = $('#name');
        let emailInput = $('#email');
        let phoneInput = $('#phone');
        let messageInput = $('#message-area');
        //create an array named required
        let required = [nameInput, emailInput, phoneInput]
        //Utilize a for loop to iterate of the entire required array
        for (let i = 0; i < required.length; i++) {
            $('label[for="' + $(required[i]).attr('id') + '"]').removeClass('warning')
            if (required[i].val() === "") {
                $('#message').html("Please fill out the required fields").addClass('warning');
                $('label[for="' + $(required[i]).attr('id') + '"]').addClass('warning')
            }
        }
        //verify that no <label>'s have the warning class.If true remove the form from the DOM
        //manipulate the <h2> to say: "Thanks for your feedback!"
        if (!$("label").attr('class')) {
            $("form").css({ display: "none" });
            $("h2").html("Thank you for your feedback");
        }
    })
})

