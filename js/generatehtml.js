var fs = require('fs');
var path = require('path');
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var fileName = '../index.html';
var html = fs.readFileSync('../template.html');
var imgpath = 'media/';

function loadimages(folder, display) {
    html = html + '<div id="' + folder.slice(0,-1) + '" class="img-container" style="display: ' + display + ';">'
    src = '../' + imgpath + folder;
    files = fs.readdirSync(src);
    var length = files.length;
    for (i in files) {
        file = files[length-i-1];
        if (file.slice(-4) == ".jpg") {
            createflipper(file, imgpath + folder);      
        }
    }
    html = html + '</div></div>';
}

function createflipper(file, src) {
    year = file.split('_')[0];
    month = months[file.split('_')[1]-1];
    day = file.split('_')[2];
    if (day[0] == "0") {
        day = day[1];
    }
    title = file.substring(11,file.length-4).replace(/_/g, ' ');
    
    html = html + '<div class="flip-card"><div class="flipper">'
            + '<div class="front" id=' + file + '><img class="main-image" src="' + src + file + '"></div>'
            + '<div class="back" id=' + file + '><img class="main-image" src="' + src + file + '">'
            + '<div class="back-description"><h1>' + title +'</h1>'
            + '<h2>' + month + ' ' + day + ", " + year + '</h2></div></div></div></div>';
}

loadimages('travel/', 'block');
loadimages('art/', 'none');
loadimages('food/', 'none');

html = html + '</body></html>';

var stream = fs.createWriteStream(fileName);
stream.write(html);
stream.end();