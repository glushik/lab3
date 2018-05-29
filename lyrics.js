function scroll_to_top(){
    window.scroll({top: 0, behavior: 'smooth'});
}
function showLyrics( name ){

    $.ajax({
        url: "./src/lyrics/"+name+".txt",
        crossDomain: true,
        contentType: "text/html;charset=utf-8",
        success: function(data){

            show (name, data)
            // console.log(data);
        }
    })
    //  show("happiness", "lollosdfjk#sdjfknsdf\nsdf,#sbdfbsdf,ns#dfsl\nsdf,h#sdkfjblfjsdf");

    oleg();

}
var butjson = document.getElementById('JSONBUT'),
reqjson = new XMLHttpRequest();
butjson.onclick = function () {
//запрос для json файла
reqjson.open('GET', 'songs.json', false);
reqjson.send();
if (reqjson.status != 200) {//выводим ошибки
    alert(reqjson.status + ': ' + reqjson.statusText);
} else {
    var i = 0,
        documjson = JSON.parse(reqjson.responseText),
        table = '<tr>';
    for (name in documjson) {
        table += '<th>' + name + '</th>';
    }
    table += '</tr>';
    for (name in documjson['1']) {
        table += '<tr><td>' + documjson['1'][name] + '</td><td>' + documjson['2'][name] + '</td><td>' + documjson['3'][name] + '</td><tr>';//создаём таблицу для полученных данных
        i++;
    }
    document.getElementById('tabforjson').innerHTML = table;//выводим результат
}
};
var kek = document.getElementById('XMLBUT');
var lol = new XMLHttpRequest();
    kek.onclick = function () {
        //запрос для xml файла
        lol.open('GET', 'pesni.xml', false);
        lol.send();
        if (lol.status != 200) {//выводим ошибки
            alert(lol.status + ': ' + lol.statusText);
        } else {
            var i,
                //создаём тамблицу для полученных данных
                xmlDoc = lol.responseXML,
                table = '<tr><th>Название</th><th>Год</th><th>Ссылка</th></tr>',
                x = xmlDoc.getElementsByTagName('song');
            for (i = 0; i < x.length; i++) {
                table += '<tr><td>' + x[i].getElementsByTagName('name')[0].childNodes[0].nodeValue + '</td><td>' + x[i].getElementsByTagName('year')[0].childNodes[0].nodeValue + '</td><td><a class="ulightbox" href="' + x[i].getElementsByTagName('ref')[0].childNodes[0].nodeValue + '" title="Нажмите, чтобы скачать">тут</a></td></tr>';
            }
            document.getElementById('kek').innerHTML = table;//выводим таблицу
        }
    };
showJSON();
function showJSON(){
    $.ajax({
        url: "./src/songs.json",
        crossDomain: true,
        contentType: "application/json; charset =utf-8",
        success: function(data){
            
            data = data["songs"];
            var first = data[0][1];
            // console.log(first);
            console.log(data);
            document.getElementById("f_n").innerHTML = first.name;
            document.getElementById("f_r").innerHTML = first.ref;
            document.getElementById("f_d").innerHTML = first.year;

            var first = data[1][2];
            console.log(first);

            document.getElementById("s_n").innerHTML = first.name;
            document.getElementById("s_r").innerHTML = first.ref;
            document.getElementById("s_d").innerHTML = first.year;

            var first = data[2][3];
            console.log(first);

            document.getElementById("t_n").innerHTML = first.name;
            document.getElementById("t_r").innerHTML = first.ref;
            document.getElementById("t_d").innerHTML = first.year;
            // console.log(data);
        }
    })
}
function showJS(){
    document.getElementById("JSON").classList.remove("hidden");
    document.getElementsById("JSONBUT").classList.add("hidden");
}
function show (name, data){

    var select = document.getElementById(name.toString());
    select.classList.remove("hidden");
    select.classList.add("poem");
    data=data.split("#").join("<br />");
    // console.log(data);
    
    select.innerHTML = data;

    // for (var str in data){
    //     console.log(str);
    //     $(select).append("<p class = 'evr'>"+str+"</p>");
    // }
}
function crXMLHttpRequest() {
    var res = false;
    if (window.XMLHttpRequest) {
        res = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        if (new ActiveXObject("Microsoft.XMLHTTP")) {
            res = new ActiveXObject("Microsoft.XMLHTTP");
        } else if (new ActiveXObject("Msxml2.XMLHTTP")) {
            res = new ActiveXObject("Msxml2.XMLHTTP");
        } else {
            res = false;
        }
    }
    return res;
}
function showXML(){

    var xhttp2 = crXMLHttpRequest();
   
        xhttp2.open("GET", 'forajax/pesni.xml', false);
        xhttp2.send();
        var xmlDoc = xhttp2.responseXML;
        var x = xmlDoc.getElementsByTagName("song");
        alert(x);
        // data.getElementsByTagName("")
            // console.log(first);
            // console.log(data);
            document.getElementById("f_n").innerHTML = first.name;
            document.getElementById("f_r").innerHTML = first.ref;
            document.getElementById("f_d").innerHTML = first.year;

            var first = data[1][2];
            console.log(first);

            document.getElementById("s_n").innerHTML = first.name;
            document.getElementById("s_r").innerHTML = first.ref;
            document.getElementById("s_d").innerHTML = first.year;

            var first = data[2][3];
            console.log(first);

            document.getElementById("t_n").innerHTML = first.name;
            document.getElementById("t_r").innerHTML = first.ref;
            document.getElementById("t_d").innerHTML = first.year;
    
            
            
            // console.log(data);
        
}
function oleg(){
    document.getElementById("loleg").classList.remove("hidden");
    animate(function(timePassed){
        loleg.style.left = timePassed / 5 + 'px';
    }, document.body.clientWidth*4.45);
    
    function animate(draw, duration){
        var start = performance.now();
        requestAnimationFrame(function animate(time){
            var timePassed = time - start;
            // console.log(time, start);
            if (timePassed > duration ) {
                timePassed = duration;
                document.getElementById("loleg").classList.add("hidden");

            }
            draw(timePassed);
            if (timePassed<duration){
                requestAnimationFrame(animate);
            }
        });
    }

}