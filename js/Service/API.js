(function(window) {
    'use strict';

    function API(){
        var xhttp;
        var url = 'http://swapi.co/api/people/1';

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var data = JSON.parse(xhttp.responseText);
                xhttp.setInnerHTML(data);
            }else if(xhttp.status == 400) {
                alert('There was an error 400')
            }
        }

        xhttp.setInnerHTML = function(data){
            var out = "";
            var name = data.name?data.name : "-";
            var height = data.height? data.height : "-";
            var mass = data.mass?data.mass : "-";
            var hairColor = data.hair_color? data.mass : "-";
            var skinColor = data.skin_color? data.skin_color : "-";
            var eyeColor = data.eye_color ? data.eye_color : "-";
            var birth = data.birth_year? data.birth_year : "-";
            var gender = data.gender ? data.gender : "-";


            out += "<div>Name : " + name + "</div><div>Height : " + height + "</div><div>Mass : " + mass + "</div><div>Hair Color : " + hairColor + "</div><div>Skin Color : " + skinColor + "</div><div>Eye Color : " + eyeColor + "</div><div>Birth : " + birth + "</div><div>Gender : " + gender+"</div>"
            document.getElementById("detail-page-wrapper").innerHTML += out;

        }
        xhttp.open('Get', url, true);
        xhttp.send();
    }

    window.app = window.app || {};
    window.app.API = API;
})(window);
