document.addEventListener("DOMContentLoaded", function() {
    setData();
})


function setData(){
    var detailChar =  JSON.parse(window.localStorage.detailChar);
    console.log(detailChar);
    setInnerHTML(detailChar);
}

function setInnerHTML(data){
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



