
function convertDate(str, returnType) {
    switch(returnType) {
        // normal date to unix
        case "unix":
            return Date.parse(str) / 1000;
            break;
        // unix to normal date
        default:
            return new Date(str * 1000);
    }
}

function setCookie(name, exdays) {
    var date = new Date();
    date.setDate(date.getDate() + exdays)

    localStorage.setItem(name, convertDate(date, "unix"));
}

function getCookie(name) {
    return localStorage.getItem(name);
}

var cookieDate = getCookie("showPopup");

if (cookieDate != null || cookieDate != "") {
    var date = new Date();

    //console.log(date + " " + convertDate(date, "unix"));
    //console.log(convertDate(cookieDate, "date") + " " + cookieDate);

    if (convertDate(date, "unix") > cookieDate) {
        setCookie("showPopup", 1);
        $('#myModal').modal('show');
    }
} else {
    setCookie("showPopup", 1);
    $('#myModal').modal('show');
}