var fs = require('fs');
var path = require('path');
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var fileName = 'index.html';
var html = fs.readFileSync('template.html');

function loadimages(folder, display) {
    html = html + '<div id="' + folder.slice(0,-1) + '" class="img-container" style="display: ' + display + ';">'
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
            title = file.split('_')[3].split('.')[0];
            html = html + '<div class="flip-card"><div class="flipper">'
            + '<div class="front" id=' + file + '><img class="main-image" src="' + folder + file + '"></div>'
            + '<div class="back" id=' + file + '><img class="main-image" src="' + folder + file + '">'
            + '<div class="back-description"><h1>' + title +'</h1>'
            + '<h2>' + month + ' ' + day + ", " + year + '</h2></div></div></div></div>';        
        }
    }
    html = html + '</div></div>';
}

loadimages('travel/', 'block');
loadimages('art/', 'none');
loadimages('food/', 'none');

html = html + '</body></html>';

var stream = fs.createWriteStream(fileName);
stream.write(html);
stream.end();