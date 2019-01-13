var fs = require('fs');
var path = require('path');
var folder = "photos/";
var fileName = 'index.html';
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var html = '<!DOCTYPE html>\n<html lang="en">'
            + '\n<head>'
                + '\n\t<!-- Global site tag (gtag.js) - Google Analytics -->'
                + '\n\t<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132386018-1"></script>'
                + '\n\t<script>'
                + '\n\t\t window.dataLayer = window.dataLayer || [];'
                + '\n\t\t function gtag(){dataLayer.push(arguments);}'
                + '\n\t\t gtag(\'js\', new Date());\n'
                + '\n\t\t gtag(\'config\', \'UA-132386018-1\');'
                + '\n\t </script>'
                + '\n\t<link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light+Two" rel="stylesheet">'
                + '\n\t<link rel="stylesheet" href="style.css">'
            + '\n</head>'
            + '\n<body>'
            + '\n<div class="header-container">'
                + '\n\t<h1 class="title">christine\'s adventures</h1>'
                + '\n\t<img class="signature" src="signature.png" alt="signature">' 
            + '\n</div>\n<div class="img-container">'

files = fs.readdirSync(folder);
var length = files.length;
for (i in files) {
    file = files[length-i-1];
    if (file.slice(-4) == ".jpg") {
        year = file.split('_')[0];
        month = months[file.split('_')[1]-1];
        day = file.split('_')[2];
        if (day[0] == "0") {
            day = day[1];
        }
        place = file.split('_')[3].split('.')[0];
        html = html + '\n\t<div class="flip-card">\n\t\t<div class="flipper">'
        + '\n\t\t\t<div class="front" id=' + file + '>\n\t\t\t\t<img class="main-image" src="' + folder + file + '">\n\t\t\t</div>'
        + '\n\t\t\t<div class="back" id=' + file + '>\n\t\t\t\t<img class="main-image" src="' + folder + file + '">'
        + '\n\t\t\t\t<div class="back-description">\n\t\t\t\t\t<h1>' + place +'</h1>'
        + '\n\t\t\t\t\t<h2>' + month + ' ' + day + ", " + year + '</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>';        
    }
}
html = html + '\n</div>\n</body>\n</html>';

var stream = fs.createWriteStream(fileName);
stream.write(html);
stream.end();