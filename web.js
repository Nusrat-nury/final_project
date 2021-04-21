var text;
switch (new Date().getday()){
    case 1:
        text = "saturday";
        break;
        case 2:
            text = "sunday";
            break;
            default:
                text = "looking forward";
}
document.getElementById("demo").innerHTML = text;