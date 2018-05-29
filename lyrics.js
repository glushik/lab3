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
function showJSON(){
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