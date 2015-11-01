
var calculate = function(object) {

    var result;

    switch (object.mathOperation) {
        case "add":
            result = parseInt(object.xInput) + parseInt(object.yInput);
            break;
        case "subtract":
            result = parseInt(object.xInput) - parseInt(object.yInput);
            break;
        case "multiply":
            result = parseInt(object.xInput) * parseInt(object.yInput);
            break;
        case "divide":
            result = parseInt(object.xInput) / parseInt(object.yInput);
            break;
        default:
            result = "Try again";
    }
    return result;
};

module.exports = (calculate);