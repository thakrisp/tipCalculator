$("#totalButton").click(function() {
    var billAmount = document.getElementById("billAmount").value;
    var tipPer = document.getElementById("tipPer").value / 10;
    var numOfPeople = document.getElementById("numOfPeople").value;
    var round = document.getElementById("round");
    var tipAmount = 0;
    var billTotal;
    var message = "";
    
    if (document.getElementById("billAmount").value !== "" && document.getElementById("billAmount").value !== "0") {
        if (document.getElementById("tipPer").value !== "" && document.getElementById("tipPer").value !== "0") {
            if (document.getElementById("numOfPeople").value !== "" && document.getElementById("numOfPeople").value !== "0") {
                tipAmount = (billAmount * tipPer).toFixed(2);
                billTotal = (+billAmount + +tipAmount).toFixed(2);
                personTotal = (billTotal / numOfPeople).toFixed(2);

                if (round.checked == true) {
                    personTotal = Math.ceil(personTotal);
                    console.log("I am checked");
                }
                $('#message').html(
                    '<div class="alert alert-success" role="alert id="message"> The Tip will be $' + tipAmount +  '<br>' +
                    'The Bill total will be $' + billTotal +
                    '<br>Each Persons bill will be $' + personTotal + '</div>'
                )
            } else {
                message += "Please enter how many people to divide by";
                $('#message').html(
                    '<div class="alert alert-danger" role="alert id="message">' + message + "<br></div>"
                )
            }
        }else {
            message += "Please enter a tip amount";
            $('#message').html(
                '<div class="alert alert-danger" role="alert id="message">' + message + "<br></div>"
            )
        }
    } 
    else {
        message += "Please enter a bill amount";
        $('#message').html(
            '<div class="alert alert-danger" role="alert id="message">' + message + "<br></div>"
        )
    };
});

$("#message").removeAttr("hidden");



/* if (numOfPeople > 1) {
    '<div class="alert alert-success" role="alert id="message"> The Each persons Bill will be $' +  + '</div><br>'
} */