var equationElements = {};

$(document).ready(function(){
    $("#inputForm").submit(function(event){
        event.preventDefault()
    });

    enable();


});

function enable(){
    $("#clear").hide();
    addObjectMathOperation();
    $(".math-button").on('click', addObjectMathOperation);
    $("#getData").on('click', doMath);
    $("#clear").on('click', clear);
}

function doMath() {

    $.each($("#inputForm").serializeArray(), function (i, field) {
        equationElements[field.name] = field.value;
    });

    $("#inputForm").find("input[type=text]").val("");

    ajaxCall();
    $("#clear").show();
}


function ajaxCall(){
    $.ajax({
        type:"POST",
        url: "/index",
        data:equationElements,
        beforeSend: function(){
            console.log("HERE IS THE DATA: ", equationElements);
            },
        success: function(data){
            console.log("this is data back from server:", data);
            appendResults(data);
        }
    })

}

function appendResults(data){
   $(".container").children().last().append("<div class = 'answer'>" + data.answer + "</div>");
}

function clear(){
    $(".answer").empty();
    equationElements = {};
    $(".math-button").removeClass('active');
}

function addObjectMathOperation(){
    console.log("I'm clicked");
    $(".math-button").on('click', function(){
        var mathOperation = event.target.id;
        equationElements.mathOperation = mathOperation;
    })
}


