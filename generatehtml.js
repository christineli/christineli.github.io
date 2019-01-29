var fs = require('fs');
var path = require('path');
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
var fileName = 'index.html';
var html = fs.readFileSync('template.html');

function loadimages(folder) {
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
            html = html + '\n\t\t<div class="flip-card">\n\t\t\t<div class="flipper">'
            + '\n\t\t\t\t<div class="front" id=' + file + '>\n\t\t\t\t\t<img class="main-image" src="' + folder + file + '">\n\t\t\t\t</div>'
            + '\n\t\t\t\t<div class="back" id=' + file + '>\n\t\t\t\t\t<img class="main-image" src="' + folder + file + '">'
            + '\n\t\t\t\t\t<div class="back-description">\n\t\t\t\t\t\t<h1>' + title +'</h1>'
            + '\n\t\t\t\t\t\t<h2>' + month + ' ' + day + ", " + year + '</h2>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>';        
        }
    }
    html = html + '</div><div id="art" class="img-container" style="display:none"></div>';
    var stream = fs.createWriteStream(fileName);
    stream.write(html);
    stream.end();
}

loadimages('photos/');
loadimages('art/');

html = html + '\n</body>\n</html>';