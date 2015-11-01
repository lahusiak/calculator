
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
        //how do I make a catch-all default?
        default:
            result = parseInt(object.xInput) / parseInt(object.yInput);
            break;

    }
    return result;
};

module.exports = (calculate);