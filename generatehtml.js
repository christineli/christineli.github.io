var fs = require('fs');
var path = require('path');
var folder = "photos/";
var fileName = 'index.html';
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var html = '<!DOCTYPE html><html lang="en">'
            + '<head>'
                + '<link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light+Two" rel="stylesheet">'
                + '<link rel="stylesheet" href="style.css">'
            + '</head>'
            + '<body>'
            + '<div class="header-container">'
                + '<h1 class="title">tingting\'s travels</h1>'
                + '<img class="signature" src="signature.png" alt="signature">' 
            + '</div><div class="img-container">'

// fs.readdirSync(folder, function(err, files) {
//     if(err) {
//         console.error("Could not list the directory.", err);
//         process.exit(1);
//     } 
//     files.forEach(function(file, index) {
//         if (file.slice(-4) == ".jpg") {
//             year = file.split('_')[0];
//             month = months[file.split('_')[1]-1];
//             day = file.split('_')[2];
//             if (day[0] == "0") {
//                 day = day[1];
//             }
//             place = file.split('_')[3].split('.')[0];
//             html = html + '<div class="flip-card"> <div class="flipper">'
//             + '<div class="front" id=' + file + '><img class="main-image" src="' + folder + file + '"></div>'
//             + '<div class="back" id=' + file + '> <img class="main-image" src="' + folder + file + '">'
//             + '<div class="back-description"> <h1>' + place +'</h1>'
//             + '<h2>' + month + ' ' + day + ", " + year + '</h2></div></div></div></div>';        
//         }
//     });
//     html = html + '</div></body></html>';
// });

files = fs.readdirSync(folder);
for (i in files) {
    file = files[i];
    if (file.slice(-4) == ".jpg") {
        year = file.split('_')[0];
        month = months[file.split('_')[1]-1];
        day = file.split('_')[2];
        if (day[0] == "0") {
            day = day[1];
        }
        place = file.split('_')[3].split('.')[0];
        html = html + '<div class="flip-card"> <div class="flipper">'
        + '<div class="front" id=' + file + '><img class="main-image" src="' + folder + file + '"></div>'
        + '<div class="back" id=' + file + '> <img class="main-image" src="' + folder + file + '">'
        + '<div class="back-description"> <h1>' + place +'</h1>'
        + '<h2>' + month + ' ' + day + ", " + year + '</h2></div></div></div></div>';        
    }
}
html = html + '</div></body></html>';

var stream = fs.createWriteStream(fileName);
stream.write(html);
stream.end();