var folder = "photos/";
var num_photos = 0;
var year = "2000";
var month = "January";
var day = "01";
var place = "";
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
jQuery.fn.reverse = [].reverse;
              

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").reverse().attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                year = val.split('_')[0];
                month = months[val.split('_')[1]-1];
                day = val.split('_')[2];
                if (day[0] == "0") {
                    day = day[1];
                }
                place = val.split('_')[3].split('.')[0];
                $(".img-container").append('<div class="flip-card"><div class="flipper"></div>');
                document.getElementsByClassName('flipper')[i].innerHTML = '<div class="front" id=' + val + '> </div> <div class="back" id=' + val + '> </div>';
                document.getElementsByClassName('front')[i].innerHTML = '<img class="main-image" src="' + folder + val + '">';
                document.getElementsByClassName('back')[i].innerHTML = '<img class="main-image" src="' + folder + val + '">'
                                                                        + '<div class="back-description"> <h1>' + place +'</h1>'
                                                                        + '<h2>' + month + ' ' + day + ", " + year + '</h2></div></div>';
            } 
        });
    }
});