$(document).ready(function(){
    $("#getData").on('click', doMath);

});

function doMath(){

    var equationElements={};

    $.each($("#inputForm").serializeArray(), function(i, field){
        equationElements[field.name] = field.value;
    });

    $("#inputForm").find("input[type=text]").val("");


    console.log(equationElements);

    $.ajax({
        type:"POST",
        url: "/data",
        data:equationElements,
        beforeSend: function(){
            //this console log appears
            console.log("HERE IS THE DATA: ", equationElements);
            },
        success: function(data){
            //this log does not appear
            console.log("this is data back from server:", data);
        }
    })

}
