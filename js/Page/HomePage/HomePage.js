document.addEventListener("DOMContentLoaded", function() {
    infiniteScroll.initialize();

})


var infiniteScroll = {
    data: {
        currentPage: 1,
        url:'http://swapi.co/api/people/?format=json&page='
    },

    initialize: function() {
        document.addEventListener("scroll", this.handleScroll);
        this.loadStuff(infiniteScroll.data.url);
    },

    handleScroll: function() {
        var wrap = document.getElementsByTagName('body');
        var contentHeight = wrap[0].scrollHeight;
        var yOffset = window.pageYOffset; 
        var y = yOffset + window.innerHeight;
        if(y >= contentHeight){
            document.getElementById('loading').style.display = 'block';
            ++infiniteScroll.data.currentPage;
            var nextURL = infiniteScroll.data.url+String(infiniteScroll.data.currentPage);
            infiniteScroll.loadStuff(nextURL);
        }
    },

    loadStuff: function(apiPath) {
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", apiPath);
        xhr.onreadystatechange = function() {
            if (xhr.status === 200 && xhr.readyState === 4) {
                var data = JSON.parse(xhr.responseText);
                var dataResult = data.results;
                window.localStorage.dataResult = JSON.stringify(dataResult);
                for (var i = 0; i < dataResult.length ; i++) {
                    self.setInnerHTML(dataResult[i], i);
                }
                document.getElementById('loading').style.display = 'none';

                goToDetailPage = function(list){
                    var index = list.getAttribute('data-index');
                    var dataChar = JSON.parse(window.localStorage.dataResult)[index];
                    window.localStorage.detailChar =  JSON.stringify(dataChar);
                    window.location.href = "js/Page/DetailPage/DetailPage.html";
                }
            }
        }
        xhr.send();
    },

    setInnerHTML : function(data, index){
        var out = "";
        var name = data['name']?data['name'] : "-";
        var height = data['height']? data['height'] : "-";
        var mass = data['mass']?data['mass'] : "-";
        var hairColor = data['hair_color']? data['mass'] : "-";
        var skinColor = data['skin_color']? data['skin_color'] : "-";
        var eyeColor = data['eye_color'] ? data['eye_color'] : "-";
        var birth = data['birth_year']? data['birth_year'] : "-";
        var gender = data['gender'] ? data['gender'] : "-";


        out += "<li onclick='goToDetailPage(this)' class='test-people-list' data-index="+index+"><div>Name : " + name + "</div><div>Height : " + height + "</div><div>Mass : " + mass + "</div><div>Hair Color : " + hairColor + "</div><div>Skin Color : " + skinColor + "</div><div>Eye Color : " + eyeColor + "</div><div>Birth : " + birth + "</div><div>Gender : " + gender+"</div></li>"
        document.getElementById("list-wrapper").innerHTML += out;


    }

}